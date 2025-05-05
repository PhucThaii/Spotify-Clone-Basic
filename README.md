# 🎵 Spotify Clone Basic

Một ứng dụng web clone cơ bản của Spotify, được xây dựng với **React** cho frontend và **Django** cho backend. Dự án này nhằm mục đích mô phỏng các chức năng chính của Spotify như nghe nhạc, quản lý playlist, tìm kiếm bài hát/nghệ sĩ, và đăng nhập người dùng.

## 🔧 Công nghệ sử dụng

- **Frontend**: React, TailwindCSS, Axios, React Router
- **Backend**: Django, Django REST Framework (DRF)
- **Database**: PostgreSQL 
- **Authentication**: Django JWT (hoặc có thể tích hợp OAuth2)

---

## 🚀 Tính năng chính

- [x] Đăng ký / Đăng nhập người dùng
- [x] Giao diện người dùng thân thiện giống Spotify
- [x] Phát nhạc cơ bản (Play/Pause/Next)
- [x] Tìm kiếm bài hát, nghệ sĩ
- [x] Tạo, chỉnh sửa và xóa playlist cá nhân
- [x] Xem thông tin chi tiết bài hát/nghệ sĩ
- [x] Lưu bài hát yêu thích

---
⚙️ Hướng dẫn chạy dự án
1. Backend (Django)

  cd backend
  python -m venv venv
  source venv/bin/activate  
  # Windows: venv\Scripts\activate
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver
  
2. Frontend (React)
  cd frontend
  npm install
  npm start

Frontend sẽ chạy ở http://localhost:3000, backend ở http://127.0.0.1:8000
