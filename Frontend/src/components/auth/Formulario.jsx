import React, { useState } from 'react';

const Formulario = ({ handleLogin, error }) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llamar a la función de inicio de sesión pasada como prop
    handleLogin(email, contraseña);
  };

  return (
      <div className="p-4 bg-white rounded-md border-8 w-1/3">
        <div className="flex justify-center mb-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
            alt="Descripción de la imagen"
            style={{ maxWidth: '40%', height: 'auto' }}
          />
        </div>
        <h2 className="flex justify-center w-full text-3xl font-semibold mb-4 text-gray-500">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="mail" className="block font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="mail"
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Contraseña" className="block font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Muestra el mensaje de error si existe */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Ingresar
            </button>
          </div>
          <div className="w-full text-xs font-semibold mb-4 text-sky-600">¿Olvidó su contraseña?</div>
          <h2 className="w-full text-xs font-semibold mb-4 text-sky-600">Contactar con administración</h2>
        </form>
      </div>
  );
};

export default Formulario;