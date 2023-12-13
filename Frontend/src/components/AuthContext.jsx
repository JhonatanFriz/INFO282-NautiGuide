
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

  const login = (newToken, newUserId, newUserRole) => {
    setToken(newToken);
    setUserId(newUserId);
    setUserRole(newUserRole);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userId', newUserId);
    localStorage.setItem('userRole', newUserRole);
    console.log(newUserRole);
    console.log(localStorage);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }

    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }

    const storedUserId = localStorage.getItem('userId');
  if (storedUserId) {
    setUserId(storedUserId);
  }
  }, []);

  return (
    <AuthContext.Provider value={{ token, userId, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
