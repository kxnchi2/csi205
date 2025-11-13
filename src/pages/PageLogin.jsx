import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PageLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (result.ok) navigate("/");
    else alert("❌ Username หรือ Password ไม่ถูกต้อง");
  };

  return (
    <div
      className="login-background"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(-45deg, #6a11cb, #2575fc, #4facfe, #00f2fe)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 12s ease infinite",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <img
          src="/picture/logo.png"
          alt="Logo"
          style={{
            width: "80px",
            marginBottom: "10px",
            borderRadius: "50%",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
          }}
        />
        <h2 style={{ color: "#333" }}>🔒 เข้าสู่ระบบ</h2>
        <p style={{ color: "#555", marginBottom: "1rem" }}>
          เข้าสู่ระบบเพื่อเข้าถึงระบบจัดการภายใน
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 0",
              width: "100%",
              borderRadius: "8px",
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "15px" }}>
          💡 ยังไม่มีบัญชี? ติดต่อผู้ดูแลเพื่อสมัครสมาชิก รหัส ขื่อ: user รหัส: user123, รหัส ขื่อ: admin รหัส: admin123
        </p>
      </div>
    </div>
  );
}
