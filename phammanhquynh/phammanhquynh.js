document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const tbody = document.getElementById("result-body");
  const resultCount = document.getElementById("result-count");

  async function search() {
    const q = input.value.trim();
    if (!q) {
      alert("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Đang tải...</td></tr>`;
    resultCount.textContent = "";

    try {
      // Gọi API từ Node-RED
      const response = await fetch(`http://localhost:1880/timkiem?q=${encodeURIComponent(q)}`);
      if (!response.ok) throw new Error("Lỗi khi truy vấn API");

      const data = await response.json();

      if (!data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Không tìm thấy kết quả nào.</td></tr>`;
        resultCount.textContent = "Không có kết quả.";
        return;
      }

      // Dựng bảng kết quả
      tbody.innerHTML = "";
      data.forEach((item) => {
        const tr = document.createElement("tr");

        // Xử lý ngày sinh (đảm bảo đúng định dạng)
        let ngaySinh = "";
        if (item.NgaySinh) {
          const d = new Date(item.NgaySinh);
          if (!isNaN(d)) {
            ngaySinh = d.toLocaleDateString("vi-VN");
          } else {
            ngaySinh = item.NgaySinh; // nếu Node-RED trả string sẵn thì giữ nguyên
          }
        }

        tr.innerHTML = `
          <td>${item.HoTen || ""}</td>
          <td>${ngaySinh || ""}</td>
          <td>${item.SDT || ""}</td>
          <td>${item.DiaChi || ""}</td>
        `;
        tbody.appendChild(tr);
      });

      resultCount.textContent = `Tìm thấy ${data.length} kết quả.`;
    } catch (err) {
      console.error(err);
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Lỗi khi tải dữ liệu.</td></tr>`;
    }
  }

  searchBtn.addEventListener("click", search);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") search();
  });
});
