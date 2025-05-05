🎵 Spotify Clone – Fullstack Project (Django + React)
⚙️ Yêu cầu hệ thống
Trước khi bắt đầu, hãy đảm bảo hệ thống của bạn đã cài đặt và cấu hình các thành phần sau:

Node.js (>= 18.x): Dùng để chạy frontend React qua Vite.
Python (>= 3.10): Dùng cho backend Django.
PostgreSQL: DataBase. Khi kết nối chỉ cần thay đổi đường dẫn trong file .evn


Cách cài đặt và chạy ứng dụng
1. Clone dự án về máy
Dùng lệnh Git để lấy toàn bộ source code về máy:

git clone 
cd Spotify_clone
2. Chạy Backend (Django)
a) Cài đặt môi trường và công cụ:
sudo apt-get update
sudo apt-get install python3-pip python3-venv docker.io
b) Tạo và kích hoạt môi trường ảo:
python3 -m venv env         # Tạo virtualenv
source env/bin/activate     # Linux/macOS
.\env\Scripts ctivate       # Windows
c) Cài đặt thư viện Python:
pip install -r requirements.txt


Mở file .env và thay đổi giá trị cho các biến cấu hình sau:
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_STORAGE_BUCKET_NAME=...
AWS_S3_REGION_NAME=...
SECRET_KEY=...               # Sao chép key được tạo ra từ lệnh tạo SECRET_KEY ở trên
URI_MONGODB_DATABASE=...     # mongodb://localhost:27017/ hoặc mongodb+srv://...

d) Chạy migration:
python manage.py migrate

e) Khởi chạy server Django:
python runserver.py

🌐 Server sẽ lắng nghe tại http://localhost:8000

3. Chạy Frontend (React + Vite)
a) Di chuyển vào thư mục frontend:
cd ../frontend #Nếu bạn đang ở thư mục backend
hoặc

cd frontend #Nếu bạn đang ở thư mục gốc Spotify_clone
b) Cài đặt các package:
npm install
c) Chạy ứng dụng React:
npm run dev
🌐 Truy cập giao diện tại http://localhost:5173

📁 Cấu trúc thư mục chính
backend/ – Mã nguồn Django, file requirements.txt, .env-example, và runserver.py
frontend/ – Mã nguồn React, package.json, cấu hình Tailwind và Vite
🔍 Lưu ý
Nếu dùng MongoDB Atlas, đảm bảo IP của bạn đã được thêm vào whitelist trong Network Access.
Các biến môi trường trong file .env phải được cấu hình chính xác để server hoạt động.
Backend mặc định chạy ở cổng 8000, frontend ở cổng 5173. Đảm bảo các cổng này không bị chiếm dụng.
