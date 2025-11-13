import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppLayout() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      {/* Outlet คือพื้นที่ที่ Pages (Home, Calculator ฯลฯ) จะมาแสดงผล */}
      <main className="app-content-outlet">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default AppLayout;