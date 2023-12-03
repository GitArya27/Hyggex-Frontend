import React from 'react';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem("jwtToken"));

  const login = () => {
    
    setAuthenticated(true);
  };

  const logout = () => {
  
    localStorage.removeItem("jwtToken");
    setAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
