import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleToggle = () => setRunning((prev) => !prev);
  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  // แปลงวินาทีเป็นรูปแบบ mm:ss
  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // 🧊 สไตล์หลัก (Glass effect)
  const containerStyle = {
    width: "280px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
  };

  const timeDisplay = {
    fontSize: "48px",
    fontWeight: "700",
    color: "#00f5d4",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    padding: "10px 0",
    marginBottom: "18px",
    textShadow: "0 0 8px #00f5d4",
    transition: "all 0.3s ease",
  };

  const buttonBase = {
    flex: 1,
    padding: "10px 0",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.25s ease",
  };

  const btnReset = {
    ...buttonBase,
    background: "linear-gradient(145deg, #e63946, #ff6b6b)",
    color: "#fff",
  };

  const btnRun = {
    ...buttonBase,
    background: running
      ? "linear-gradient(145deg, #f1c40f, #f9e79f)"
      : "linear-gradient(145deg, #06d6a0, #52b788)",
    color: running ? "#222" : "#fff",
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ color: "#00b4d8", marginBottom: "10px", fontWeight: "600" }}>
        ⏱ Smart Timer
      </h3>

      <div style={timeDisplay}>{formatTime(seconds)}</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleReset}
          style={btnReset}
          onMouseEnter={(e) => (e.target.style.filter = "brightness(1.1)")}
          onMouseLeave={(e) => (e.target.style.filter = "brightness(1)")}
        >
          ↻ Reset
        </button>

        <button
          onClick={handleToggle}
          style={btnRun}
          onMouseEnter={(e) => (e.target.style.filter = "brightness(1.1)")}
          onMouseLeave={(e) => (e.target.style.filter = "brightness(1)")}
        >
          {running ? "❚❚ Pause" : "▶ Run"}
        </button>
      </div>

      <p
        style={{
          fontSize: "12px",
          marginTop: "12px",
          opacity: 0.7,
          fontStyle: "italic",
        }}
      >
        ⏳ Press Run to start counting
      </p>
    </div>
  );
}
