import React, { useState } from 'react';
import Formulario from './auth/Formulario';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import clientAxios from './config/clienteAxios';

const Auth = () => {
  const navigate = useNavigate();
  const { login, logout, token } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, contraseña) => {
    try {
      setLoading(true); // Activar el estado de carga

      const response = await clientAxios.post(`/auth/login`, {
        mail: email,
        password: contraseña,
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        login(response.data.user);
        console.log(response.data.token)
        
        // Simular un estado de carga de 1 segundo antes de recargar la página
        setTimeout(() => {
          // Recarga la página después de iniciar sesión
          window.location.reload();
        }, 10);
        navigate('/barco');
      } else {
        // Manejar el caso cuando no hay un token en la respuesta
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Error de autenticación: Verifica tu correo y contraseña");
      } else {
        console.error("Error de inicio de sesión:", error.message);
      }
    } finally {
      setLoading(false); // Desactivar el estado de carga independientemente del resultado
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% h-screen flex justify-center items-center">
      <Formulario handleLogin={handleLogin} />
      {loading && <p>Cargando...</p>}
      {token && <button onClick={handleLogout}>Cerrar Sesión</button>}
    </div>
  );
};

export default Auth;
