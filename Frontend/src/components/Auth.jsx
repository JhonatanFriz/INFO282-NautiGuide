import React, { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Formulario from './auth/Formulario';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import clientAxios from './config/clienteAxios';

const Auth = () => {
  const navigate = useNavigate();
  const { login, logout, token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const handleLogin = async (email, contraseña) => {
    try {
      setLoading(true);

      const response = await clientAxios.post(`/auth/login`, {
        mail: email,
        password: contraseña,
      });

      if (response.data && response.data.token) {
        // const { token, role } = response.data;
        const { userId, role } = response.data;
        const userInfoResponse = await clientAxios.get(`/users/${userId}`);
        const userInfo = userInfoResponse.data;
        // localStorage.setItem('token', response.data.token);
        login(response.data.token, userId, role);
        // login(token, role);
        await new Promise(resolve => setTimeout(resolve, 500));
        // Simular un estado de carga de 1 segundo antes de recargar la página
        setTimeout(() => {
        // window.location.reload();
        navigate('/barco');
        }, 1);
        // navigate('/barco');
        
      } else {
        setAuthError("Error: No se recibió un token en la respuesta del servidor");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setAuthError("Error de autenticación: Verifica tu correo y contraseña");
      } else {
        setAuthError("Error de inicio de sesión: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = () => {
    logout();
    // navigate('/auth');
  };

  return (
    <div className="bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% h-screen flex justify-center items-center">
      <Formulario handleLogin={handleLogin} error={authError} />
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <SyncLoader color={'#36D7B7'} loading={loading} size={10} />
          <p className="ml-2">Cargando...</p>
        </div>
      )}
      {/* {token && <button onClick={handleLogout}>Cerrar Sesión</button>} */}
    </div>
  );
};

export default Auth;