import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform login logic and set isAuthenticated to true
    console.log('Login function was triggered, isAuthenticated is set to true.');
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic and set isAuthenticated to false
    console.log('Logout function was triggered, isAuthenticated is set to false.');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
