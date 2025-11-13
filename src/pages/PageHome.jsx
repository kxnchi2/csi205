import React from "react";

const PageHome = () => {
  const container = {
    minHeight: "100vh",            // ✅ ให้สูงเต็มหน้าจอ
    display: "flex",               // ✅ ใช้ flexbox จัดกึ่งกลาง
    justifyContent: "center",      // ✅ กึ่งกลางแนวนอน
    alignItems: "center",          // ✅ กึ่งกลางแนวตั้ง
    background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
    fontFamily: "'Kanit', sans-serif",
  };

  const profileCard = {
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    width: "90%", // ✅ ให้ย่อขนาดลงเมื่อจอเล็ก
  };

  const avatar = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #3498db",
    boxShadow: "0 0 15px rgba(52,152,219,0.5)",
    marginBottom: "1rem",
  };

  const infoBox = {
    background: "#f8f9fa",
    borderRadius: "12px",
    padding: "1rem",
    marginTop: "1.5rem",
    textAlign: "left",
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.05)",
  };

  const sectionTitle = {
    color: "#2c3e50",
    borderBottom: "2px solid #3498db",
    display: "inline-block",
    marginBottom: "0.5rem",
    fontWeight: "600",
  };

  const fadeIn = {
    animation: "fadeIn 0.8s ease-in-out",
  };

  return (
    <div style={container}>
      <div style={{ ...profileCard, ...fadeIn }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src="/picture/line_stdempimg.cfm_2.jpg"
            alt="รูปนักศึกษา"
            style={avatar}
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
          />
        </div>


        <h2 style={{ color: "#1e3a8a", marginBottom: "0.5rem" }}>ณฐกร รัตนารักษ์</h2>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          นักศึกษาชั้นปีที่ 2 – สาขาวิทยาการคอมพิวเตอร์
          <br />คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม
        </p>

        <div style={infoBox}>
          <h4 style={sectionTitle}>ข้อมูลส่วนตัว</h4>
          <p><strong>รหัสนักศึกษา:</strong> 67132512</p>
          <p><strong>ชื่อ-สกุล:</strong> ณฐกร รัตนารักษ์</p>
          <p><strong>สาขา:</strong> วิทยาการคอมพิวเตอร์</p>
          <p><strong>คณะ:</strong> เทคโนโลยีสารสนเทศ</p>
        </div>

        <div style={infoBox}>
          <h4 style={sectionTitle}>เป้าหมายในอนาคต</h4>
          <p>
            ต้องการทำงานในหน่วย **Army Cyber Center**
            เพื่อพัฒนาทักษะด้านความมั่นคงทางไซเบอร์ และร่วมปกป้องระบบสารสนเทศของชาติ
          </p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <button
            style={{
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            💬 ติดต่อฉัน
          </button>
        </div>
      </div>

      {/* ✅ เพิ่ม Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PageHome;
