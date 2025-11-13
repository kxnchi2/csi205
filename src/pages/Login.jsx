// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // เพิ่ม useLocation
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // ใช้ useLocation เพื่อดึง state ที่ส่งมาจาก ProtectedRoute

  // กำหนดเส้นทางที่จะ Redirect ไปหลังจาก Login
  // ถ้ามี state.from.pathname จาก ProtectedRoute ให้ใช้เส้นทางนั้น
  // ถ้าไม่มี (เช่น มาที่หน้า Login โดยตรง) ให้ Redirect ไปที่หน้า Home ("/")
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const result = auth.login(username, password); // สมมติว่า auth.login คืนค่า { ok: true/false }
    if (result.ok) {
      // เมื่อ Login สำเร็จ ให้นำทางไปยังเส้นทางที่บันทึกไว้
      navigate(from, { replace: true });
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    // ... โค้ด Form เหมือนเดิม
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px" }}>
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
      <div style={{ marginTop: "10px", fontSize: "14px" }}>
        ทดลองใช้: user/user123 หรือ admin/admin123
      </div>
    </div>
  );
}