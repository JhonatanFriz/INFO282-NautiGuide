import React, { useState } from 'react';
import Formulario from './auth/Formulario';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación
  const handleSuccessfulAuth = () => {
    // Realiza cualquier acción que necesites después de la autenticación exitosa
    // Por ejemplo, aquí redirigimos al usuario a la página de inicio (home)
    // navigate('/barco'); // Cambia '/home' al URL deseado
  };

  return (
    <div>
      <Formulario />
    </div>
  );
}

export default Login;