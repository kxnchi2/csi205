import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout
import AppLayout from "./AppLayout";

// Pages
import PageHome from "./pages/PageHome";
import PageCalculator from "./pages/PageCalculator";
import PageAnimation from "./pages/PageAnimation";
import PageComponent from "./pages/PageComponent";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PageLogin from "./pages/PageLogin"; // ✅ เพิ่ม
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ เพิ่ม

// Components
import Todos from "./components/Todos";

// Context
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ เพิ่ม

const router = createBrowserRouter(
  [
    // Public login route
    { path: "/login", element: <PageLogin /> },

    // All other routes are protected by ProtectedRoute
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <PageHome /> },
        { path: "home", element: <PageHome /> },
        { path: "calculator", element: <PageCalculator /> },
        { path: "animation", element: <PageAnimation /> },
        { path: "component", element: <PageComponent /> },
        { path: "todos", element: <Todos /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ],
  { basename: "/csi205" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
