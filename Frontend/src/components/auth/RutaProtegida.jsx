import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const RutaProtegida = ({ element }) => {
  const { token } = useAuth();

  // Si el usuario está autenticado, renderiza la ruta, de lo contrario, redirige a la página de inicio de sesión
  return token ? element : <Navigate to="/auth" replace />;
};

export default RutaProtegida;
