// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // สมมติว่า AuthContext อยู่ที่นี่

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  // ตรวจสอบสถานะการเข้าสู่ระบบ โดยดูจาก auth.user (มาจาก AuthContext)
  if (!auth.user) {
    // ถ้ายังไม่เข้าสู่ระบบ ให้ Redirect ไปหน้า /login
    // และส่ง state ไปด้วย เพื่อให้รู้ว่าผู้ใช้พยายามจะเข้าหน้าไหนก่อนถูก Redirect
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ถ้าเข้าสู่ระบบแล้ว ให้แสดงผล Component ลูก (children หรือ Outlet)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;