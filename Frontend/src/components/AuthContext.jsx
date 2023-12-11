
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (newToken, newUserId, newUserRole) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setUserId(newUserId);
    localStorage.setItem('userId', newUserId);
    setUserRole(newUserRole);
    localStorage.setItem('userRole', newUserRole);
    console.log(newToken);
    console.log(localStorage);
    const iddd = localStorage.getItem('userId');
    console.log(iddd);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    console.log(localStorage);
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
    setUserRole(storedUserId);
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

// --------------------------------------


// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   // const [token, setToken] = useState(null);
//   // const [userRole, setUserRole] = useState(null);

//   const login = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem('token', newToken);
//     console.log(newToken);
//   };

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };



// ---------------------------------------------------
