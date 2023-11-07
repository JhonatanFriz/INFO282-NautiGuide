import React, { useState } from 'react';
import Formulario from './auth/Formulario';
import { useNavigate } from 'react-router-dom';
import clientAxios from './config/clienteAxios';

const Auth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Variable de estado para el mensaje de error

  const handleLogin = async (email, contraseña) => {
    try {
      const response = await clientAxios.post(`/auth/login`, {
        mail: email,
        password: contraseña,
      });

      // Verifica si la respuesta del servidor incluye un token (ajusta esto según la respuesta real)
      if (response.data && response.data.token) {
        // Almacena el token en localStorage
        localStorage.setItem('token', response.data.token);
        console.log(response.data.token);
        // Redirige al usuario a la página de inicio
        navigate('/barco');
      } else {
        setError('Error inesperado al iniciar sesión. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      setError('Por favor, verifica tu correo y contraseña.');
      console.log(error);
    }
  };

  return (
    <div>
      <Formulario handleLogin={handleLogin} error={error} />
    </div>
  );
};

export default Auth;