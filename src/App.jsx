import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import หน้าและ Components ที่เกี่ยวข้องกับการ Login
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext"; // ต้องสร้างไฟล์นี้

// Components/Pages เดิม
import Home from "./pages/PageHome";
import Calculator from "./pages/PageCalculator";
import Animation from "./pages/PageAnimation";
import Component from "./pages/PageComponent";
import Todos from "./components/Todos";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    // ✅ ห่อหุ้มด้วย AuthProvider ก่อน Router
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Navbar />

          <main style={{ minHeight: "70vh", padding: "1rem" }}>
            <Routes>
              {/* ----------------------------------------------------------------- */}
              {/* ✅ 1. กำหนด Route สำหรับหน้า Login (ไม่ต้อง Protected) */}
              <Route path="/login" element={<LoginPage />} />

              {/* ----------------------------------------------------------------- */}
              {/* ✅ 2. เส้นทาง Protected (ต้อง Login ก่อนเข้าถึง) */}
              {/* ใช้ ProtectedRoute เป็น Element ที่ห่อหุ้มหน้า Home */}
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
              <Route path="/todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
              <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              
              {/* ----------------------------------------------------------------- */}
              {/* ✅ 3. เส้นทางที่ไม่ต้อง Protected (ถ้ามี เช่น หน้า About Us, Contact) */}
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/component" element={<Component />} />
              
              {/* ----------------------------------------------------------------- */}
              {/* 4. หน้า 404/Not Found */}
              <Route
                path="*"
                element={
                  <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>404 - Page Not Found</h2>
                    <p>
                      กลับไปหน้า <a href="/">Home</a>
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;