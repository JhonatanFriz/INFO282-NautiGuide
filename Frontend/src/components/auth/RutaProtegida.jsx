import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const RutaProtegida = ({ children, requiredRole }) => {
  const { token, userRole } = useAuth();

  const isAuthorize = userRole == requiredRole

  // Si el usuario está autenticado, renderiza la ruta, de lo contrario, redirige a la página de inicio de sesión
  return (token && isAuthorize) ? children : <Navigate to="/" replace={true} />;
};

export default RutaProtegida;

RutaProtegida.jsx
