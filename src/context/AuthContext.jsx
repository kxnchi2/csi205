import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const users = [
  { username: "user", password: "user123", role: "user" },
  { username: "admin", password: "admin123", role: "admin" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser(found);
      return { ok: true };
    }
    return { ok: false };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
