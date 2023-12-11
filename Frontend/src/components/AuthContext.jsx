// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [role, setRole] = useState(null); // Nuevo estado para almacenar el rol del usuario

//   const login = (token, role) => {
//     setToken(token);
//     setRole(role);
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     setToken(null);
//     setRole(null);
//     localStorage.removeItem('token');
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };




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
    setUserRole(newUserRole);

    console.log(newToken);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserRole(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
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

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userRole, setUserRole] = useState(null);

//   const login = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem('token', newToken);

//     // Decodifica el token para obtener la información
//     const decodedToken = jwt.decode(token);

//     setUserRole(decodedToken.role);

//     console.log(decodedToken);
//   };

//   const logout = () => {
//     setToken(null);
//     setUserRole(null);
//     localStorage.removeItem('token');
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);

//       // Decodifica el token para obtener la información al cargar la página
//       const decodedToken = jwtDecode(storedToken);
//       setUserRole(decodedToken.role);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, userRole, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };