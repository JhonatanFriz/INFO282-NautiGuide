
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || null);

  const login = (newToken, newUserId, newUserRole, newUserName) => {
    setToken(newToken);
    setUserId(newUserId);
    setUserRole(newUserRole);
    setUserName(newUserName);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userId', newUserId);
    localStorage.setItem('userRole', newUserRole);
    localStorage.setItem('userName', newUserName);;
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserRole(null);
    setUserName(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
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
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
    setUserId(storedUserName);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, userId, userRole, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
