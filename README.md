# WEB_BT2
Bài tập 02 của sinh viên: K225480106057 - Phạm Mạnh Quỳnh - môn phát triển ứng dụng trên nền web
# 📝 BÀI TẬP MÔN PHÁT TRIỂN ỨNG DỤNG TRÊN NỀN WEB SỐ 2
# NGÀY GIAO: 19/10/2025 - DEADLINE: 26/10/2025
# NỘI DUNG BÀI TẬP
# 🧩 ĐỀ BÀI
- Cài đặt Apache Web Server.
- Cài đặt NodeJS và Nodered.
- Tạo cơ sở dữ liệu SQL Server 2022.
- Cài đặt thư viện trên Nodered.
- Tạo API Back-end bằng Nodered.
- Tạo giao diện Front-end.
- Nhận xét bài làm của mình
# ✏️ YÊU CẦU
- Yêu cầu bắt buộc về thời gian: không quá deadline, quá: 0 điểm (ko có ngoại lệ)
- Cài đặt được Apache và Nodejs và Nodered: 1đ
- Cài đặt được các thư viện của Nodered: 1đ
- Nhập dữ liệu demo vào SQL Server: 1đ
- tạo được Back-end api trên Nodered, test qua url thành công: 1đ
- tạo được Front-end HTML CSS JS, gọi được API, hiển thị kết quả: 1đ
- trình bày độ hiểu về toàn bộ quá trình : 5đ
# 💡 GHI CHÚ
- Yêu cầu trên cài đặt trên ổ D, nếu máy ko có ổ D có thể linh hoạt chuyển sang ổ khác, path khác.
- Có thể thực hiện trực tiếp trên máy tính Windows, hoặc máy ảo
- Vì cơ sở dữ liệu là tuỳ ý: sv cần mô tả rõ db chứa dữ liệu gì, nhập nhiều dữ liệu test có nghĩa, json trả về sẽ có dạng như nào cũng cần mô tả rõ.
- Có thể xây dựng nhiều API cùng cơ chế, khác tính năng: như tìm kiếm, thêm, sửa, xoá dữ liệu trong DB.
- Bài làm phải có dấu ấn cá nhân, nghiêm cấm mọi hình thức sao chép, gian lận (sẽ cấm thi nếu bị phát hiện gian lận).
- Bài tập thực làm sẽ tốn nhiều thời gian, sv cần chứng minh quá trình làm: save file readme.md mỗi khoảng 15-30 phút làm : lịch sử sửa đổi sẽ thấy quá trình làm này!
- Nhắc nhẹ: github không fake datetime được.
- Sinh viên được sử dụng AI để tham khảo.
# NỘI DUNG BÀI LÀM
1. Cài đặt Apache Web Server.
- Vô hiệu hoá IIS: nếu IIS đang chạy thì mở CMD quyền Admin để chạy lệnh: iisreset /stop
<img width="1210" height="693" alt="Screenshot 2025-10-26 194510" src="https://github.com/user-attachments/assets/1e33fb3a-9d32-4767-873e-95a0ed0c6230" />
-> Mục đích: Cần dừng hoạt động của IIS trên cổng 80 (HTTP) vì bài tập trước đó, khi đó thì Apache mới có thể chạy trên cổng này được.
- Download Apache Server và giải nén:
+ Link download: https://www.apachelounge.com/download/ (đây là link for Window)
<img width="1920" height="1080" alt="Screenshot 2025-10-26 092203" src="https://github.com/user-attachments/assets/2f927572-64a4-4523-9dcc-20efc3c60910" />

+ Sau khi bấm download thì sẽ nhận được file này:
<img width="882" height="36" alt="Screenshot 2025-10-26 194752" src="https://github.com/user-attachments/assets/e585d3b3-7a56-4b92-9815-7748fa7d5a70" />

+ Giải nén file vào ổ E (Máy e không có ổ D nên e dùng ổ E):
<img width="871" height="784" alt="Screenshot 2025-10-26 195005" src="https://github.com/user-attachments/assets/44e87e0b-165d-49cf-a85b-b89ac7166b4c" />

- Cấu hình file httpd.conf:
<img width="631" height="262" alt="Screenshot 2025-10-26 195251" src="https://github.com/user-attachments/assets/6ed110ce-0e16-4996-8749-0a9f4ed0bf88" />
<img width="850" height="240" alt="Screenshot 2025-10-26 195323" src="https://github.com/user-attachments/assets/175934e9-3c36-4850-850c-c9a85c2db2c3" />
<img width="519" height="177" alt="Screenshot 2025-10-26 195345" src="https://github.com/user-attachments/assets/958e7a10-272f-493a-8c06-c2325411384f" />
<img width="843" height="85" alt="Screenshot 2025-10-26 195357" src="https://github.com/user-attachments/assets/21f32091-95b9-48dd-b8ac-1dbc2b192c70" />
-> Mục đích: File httpd.conf là file cấu hình chính của Apache Web Server, có thể cấu hình lại port (mặc định là cổng 80), folder chứa các file web (htdocs), server name,... -> Trong ảnh thực hiện xóa bỏ # ở dòng "Include conf/extra/httpd-vhosts.conf" để có thể kích hoạt cấu hình Virtual Host, nghĩa là cho phép Apache đọc và áp dụng file httpd-vhosts.conf. Đây là cách để nhiều website có thể chạy cùng lúc trên Apache.

- Cấu hình file httpd-vhosts.conf:
<img width="681" height="344" alt="Screenshot 2025-10-26 095152" src="https://github.com/user-attachments/assets/1da72f8f-ab15-47d6-a8a1-7e72ee6c4430" />
-> Mục đích: Cấu hình website với domain, thư mục web, log,...
- Trong folder Apache24, tạo folder phammanhquynh chứa file index.html, đây là file web để chạy domain phammanhquynh.com
<img width="1919" height="239" alt="Screenshot 2025-10-26 200029" src="https://github.com/user-attachments/assets/e56567b4-7628-40c3-b83d-060f9c7b2971" />

- Cấu hình file host để fake ip 127.0.0.1 cho domain ảo vừa tạo:
<img width="386" height="45" alt="Screenshot 2025-10-26 092355" src="https://github.com/user-attachments/assets/3810af8a-5e9f-48f6-b32f-486dab03013b" />

- Chạy CMD với quyền Admin trên path D:\Apache24\bin\httpd.exe, sau đó khởi động apache:
<img width="671" height="76" alt="Screenshot 2025-10-26 094101" src="https://github.com/user-attachments/assets/9b0e1210-21d7-4641-b97f-32862b207428" />
-> Mục đích: Đăng ký Apache thành một dịch vụ (Service) trong Windows.
  
2. Cài đặt Nodejs và Nodered
- Cài đặt Nodejs trên : https://nodejs.org/en/download:
<img width="1920" height="1080" alt="Screenshot 2025-10-26 150410" src="https://github.com/user-attachments/assets/aa2d7ea9-6537-441b-90d0-b71a16ad03d8" />

- Chạy file exe và cấu hình :
<img width="638" height="490" alt="Screenshot 2025-10-26 150337" src="https://github.com/user-attachments/assets/b63b37c9-134f-4fc9-88d0-99e038efad86" />

- Cài nodered:
+ chạy CMD, vào thư mục E:\nodejs
<img width="1471" height="841" alt="Screenshot 2025-10-26 150923" src="https://github.com/user-attachments/assets/30cbaa3d-ed79-468f-bc7e-870dc8f41582" />
+ Download file trên link: https://nssm.cc/release/nssm-2.24.zip:
<img width="847" height="55" alt="Screenshot 2025-10-26 200845" src="https://github.com/user-attachments/assets/da2e82a2-435b-440a-a147-47e2270721d2" />
+ Giải nén và coppy file nssm.exe vào folder nodered:
<img width="819" height="373" alt="Screenshot 2025-10-26 151939" src="https://github.com/user-attachments/assets/537eb783-a5d9-49ac-9651-abf7edafad8f" />
+ Tạo file "E:\nodejs\nodered\run-nodered.cmd"
<img width="1524" height="553" alt="Screenshot 2025-10-26 201020" src="https://github.com/user-attachments/assets/23a02114-4f16-4f58-8fdc-0b143a3540c2" />

+  Cài đặt service a1-nodered:
<img width="749" height="151" alt="Screenshot 2025-10-26 152516" src="https://github.com/user-attachments/assets/5b6bfbb8-7939-41cc-a0fe-cc7f7f2f5ac3" />

+  Chạy service a1-nodered bằng lệnh: nssm.exe install a1-nodered "D:\nodejs\nodered\run-nodered.cmd"
3. Tạo cơ sở dữ liệu SQL Server 2022
- Mở SQL và tạo database:
<img width="1044" height="873" alt="Screenshot 2025-10-26 201255" src="https://github.com/user-attachments/assets/2fd2f47a-56ba-451b-ac65-506b48b693e0" />
<img width="695" height="258" alt="Screenshot 2025-10-26 201350" src="https://github.com/user-attachments/assets/79361f2c-644c-4b17-b6da-a6806804e84e" />

- Tạo bảng và nhập các thuộc tính:
<img width="820" height="306" alt="image" src="https://github.com/user-attachments/assets/be063cea-4c37-4929-84ee-f91e2a6831bd" />
- Nhập dữ liệu demo:
<img width="653" height="302" alt="image" src="https://github.com/user-attachments/assets/73c395a6-b0fd-4ad6-8a48-fd5694aaf244" />

4. Cài đặt các thư viện của Nodered:
- Chạy localhost:1880 để mở Nodered:
<img width="1920" height="1080" alt="Screenshot 2025-10-26 152710" src="https://github.com/user-attachments/assets/201e1952-83a5-4b8d-b8ee-1f89bf3541a2" />

- Cài đặt các thư viện cần thiết. Ví dụ:
<img width="1920" height="1080" alt="Screenshot 2025-10-26 161742" src="https://github.com/user-attachments/assets/e47cb967-e021-4cb9-adcb-00125007594d" />

- Sửa file E:\nodejs\nodered\work\settings.js:
<img width="1117" height="282" alt="image" src="https://github.com/user-attachments/assets/a8c1136b-f4fc-45a0-88a8-72bd3e3dfff9" />
->  Mục đích: cấu hình tài khoản admin (username, password) để đăng nhập Nodered
5. Tạo API Back-end bằng Nodered.
- Tạo các node cần thiết: http in, function, MSSQL, http response, debug
<img width="1142" height="352" alt="image" src="https://github.com/user-attachments/assets/17a6e980-5599-49fd-ae58-256fcfd148e9" />
+ http in: Nhận request từ client (đầu vào API)
+ function: Xử lý, tạo logic hoặc truy vấn
+ MSSQL: Kết nối và lấy dữ liệu từ SQL Server
+ http response: Trả kết quả về client
+ debug: In ra log để kiểm tra dữ liệu
- Cấu hình chi tiết các node như sau:
<img width="1920" height="1080" alt="Screenshot 2025-10-26 183232" src="https://github.com/user-attachments/assets/ebd7418e-6d60-419c-9f7d-5fda52d4f9da" />
<img width="911" height="839" alt="image" src="https://github.com/user-attachments/assets/46fe67bf-6355-4099-8e91-137d48a0f8d8" />
<img width="800" height="894" alt="image" src="https://github.com/user-attachments/assets/bb5fc33e-8f50-4559-a775-3c9161f37928" />
<img width="1920" height="1080" alt="Screenshot 2025-10-26 183517" src="https://github.com/user-attachments/assets/967a39b0-4346-4e02-beee-197b2f1fc60f" />
<img width="718" height="822" alt="image" src="https://github.com/user-attachments/assets/a3978bdf-afde-450c-b955-f329350ef3f6" />
- Sau khi cấu hình nhấn Done -> Deploy
- Chạy localhost:1880/timkiem sẽ trả về dữ liệu dạng json:

<img width="1918" height="746" alt="image" src="https://github.com/user-attachments/assets/6eae122b-07dd-40de-b76a-46687b67d794" />

6. Tạo giao diện Front-end.
- Trong folder phammanhquynh chưa file index.html đã tạo ban đầu, tạo thêm các file CSS và JS:

<img width="1043" height="355" alt="image" src="https://github.com/user-attachments/assets/7f780bbb-c10a-4b17-afb1-63d5f9082a56" />

-  Viết giao diện bằng HTML và CSS trong file index.html và phammanhquynh.css:

<img width="1603" height="963" alt="Screenshot 2025-10-26 202526" src="https://github.com/user-attachments/assets/75ce08aa-961b-4924-ad1d-0fb6625bf385" />

<img width="1328" height="914" alt="Screenshot 2025-10-26 202535" src="https://github.com/user-attachments/assets/e01d4d57-46b3-4b86-a78a-f9bbb595a91a" />

-  Lập trình JS  trong file phammanhquynh.js:

<img width="1222" height="963" alt="image" src="https://github.com/user-attachments/assets/d0b3ad5f-e8aa-4702-af41-ab4b2890c5a9" />

-  Chạy file index.html trong folder  \Apache24\hoangkimngoc:

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/650bd7ea-db30-45db-9f8e-7c00d6cfba5a" />

-> Kết hợp backend nodered + frontend html css + csdl SQL: kết quả là khi người dùng gửi GET bằng cách nhập nội dung tìm kiếm trên frontend thì backend truy vấn database tìm nội dung tương ứng rồi trả về kết quả cho client.

7. Nhận xét:
- Trong quá trình cài đặt phần mềm:
  + Khi cài đặt 1 web server thì cần biết port nào server đó sẽ chạy, chẳng hạn như IIS thường chạy port 80, thì khi muốn cài thêm web server khác thì cần tắt hoạt động của server trên cổng 80 đẻ cho server khác chạy.
+ Ngoài cài đặt thủ công, trực tiếp thì có thể dùng phần mềm trung gian như XAMPP hoặc cài trên máy ảo.
+ Khi cấu hình các file cấu hình chính của web server thì cần mở quyền Admin cho ứng dụng viết cấu hình.
+ Khi cài đặt hay khởi động nodered thì cần mở quyền Admin cho CMD.
+ Khi cấu hình các node trên nodered thì cần tìm hiểu thật kỹ các thuộc tính của từng node, cách hoạt động ra sao.
+ Khi cấu hình node MSSQL thì cần connect tới SQL Server, cần điền chính xác các thông tin như servername, port, username, password, database name. Ngoài ra cần tìm hiểu và xác định đúng Query Mode.
+ Nên test connect của từng node trước bằng cách thêm node Debug. Trong quá trình test connect thì cần mở Debug message, đọc các message sau khi deploy node để xem kết quả deploy đúng hay chưa.
+ Sau mỗi lần sửa cấu hình node cần nhấn nút Update và Deploy lại 1 lần
- Dựng cơ sở dữ liệu:
+ Cơ sở dữ liệu sử dụng trong bài toán tìm kiếm ở mức cơ bản, chỉ có các thuộc tính cần thiết.
- Cách dùng Nodered để tạo Backend
+ Về cơ bản, Nodered dễ sử dụng, linh hoạt
+ Cần hiểu rõ các node để connect đúng
+ Các thuộc tính trong các node thay thế cho các dòng lệnh dài dòng khi code chay.
+ Khi mới bắt đầu cần test connect từng node, sử dụng Inject (timestamp) thay cho http in để test cho dễ thực hiện
+ Debug quan trọng, nên đọc kỹ debug để tìm ra lỗi khi connect.
- Cách frontend tương tác với backend:
+ Khi client gửi phương thức POST/GET thì bên backend là API Nodered sẽ nhận và xử lý yêu cầu: truy vấn database (SQL Server). Sau đó trả về kết quả cho client.
+ Kết quả backend trả về dạng json, frontend sẽ nhận json này bằng js thông qua hàm fetch(), và sau đó cập lên giao diện.
+ Connect DB với Backend Nodered thông qua nhập các thuộc tính server name, port, username, ....

