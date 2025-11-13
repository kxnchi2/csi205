import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const navContainer = {
  backgroundColor: "#886c84ff",
  padding: "0.75rem 2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const linkGroup = {
  display: "flex",
  gap: "1.5rem",
  alignItems: "center",
  flexWrap: "wrap",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "500",
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  position: "relative",
};

const activeLinkStyle = {
  backgroundColor: "#dd9b9bff",
  color: "#41547cff",
};

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const { user, logout } = useAuth();

  return (
    <nav style={navContainer}>
      <div style={linkGroup}>
        {/* 🔹 หน้าทั้งหมด */}
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/todos"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Todos
        </NavLink>

        <NavLink
          to="/calculator"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Calculator
        </NavLink>

        <NavLink
          to="/animation"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Animation
        </NavLink>

        <NavLink
          to="/component"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Component
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Products
        </NavLink>

        {/* 🛒 Cart */}
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <ShoppingCart size={18} style={{ marginRight: "5px" }} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-20px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  minWidth: "18px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
          Cart
        </NavLink>

        {/* 🔐 Login / Logout */}
        {user ? (
          <>
            <span style={{ color: "white" }}>👤 {user.username}</span>
            <button
              onClick={logout}
              style={{
                backgroundColor: "#d45a5a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {}),
            })}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
