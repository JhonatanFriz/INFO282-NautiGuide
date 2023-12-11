import React, { useState } from 'react';
import clientAxios from '../config/clienteAxios';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(nombre && email && contraseña)) { // Verifica si el campo de rol está vacío
      setError('Por Favor ingrese todos los datos');
      return; // Impide el envío del formulario
    }
    if (!rol) {
      setError('Seleccione un rol antes de enviar el formulario.'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }

    try {
      const { data } = await clientAxios.post(`/users`, {
        name: nombre,
        mail: email,
        password: contraseña,
        rol: rol,
      });
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error.includes('correo')) {
        setError('El correo electrónico ya está registrado.');
      } else {
        console.log(error); 
      }
    }
    window.location.reload();
  };

  return (
    <div className="bg-white w-1/3 h-3/4 p-4 shadow-md border-8 mr-4 flex flex-col justify-center items-center">
      <div className= "w-full">
        <h2 className="text-xl font-semibold mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contraseña" className="block font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rol" className="block font-medium mb-1">
              Rol
            </label>
            <select
              id="rol"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="">Seleccione rol</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USUARIO">USUARIO</option>
            </select>
          </div>
          {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si existe */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
