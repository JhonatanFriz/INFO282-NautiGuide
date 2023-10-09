import React, { useState } from 'react';

//cambiar campos del rut , usuario para adapatarlo a la base de datos modifacas en el back*

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    const handleSubmit =  async(e) => {
      e.preventDefault();
  
      try {
        
          const {data} = await clientAxios.post(`/users`, {
                  mail: email,
                  password: contraseña
           })
      } catch (error) {
          console.log(error);
      }
      window.location.reload();
  
  
    };
  
    return (
      <div className="h-screen flex justify-center items-center bg-sky-800">
        <div className="p-4 bg-white rounded-md border-8 w-1/3">
        <div className="flex justify-center mb-6">
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
        alt="Descripción de la imagen"
        style={{ maxWidth: '40%', height: 'auto'}}
      />
    </div>
          <h2 className="flex justify-center w-full text-3xl font-semibold mb-4 text-gray-500">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Usuario
              </label>
              <input
                type="email"
                id="email"
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
                type="text"
                id="contraseña"
                className="w-full px-4 py-2 rounded-full border focus:outline-none focus:border-blue-500"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Ingresar
              </button>
            </div>
            <div 
            className="w-full text-xs font-semibold mb-4 text-sky-600">¿Olvido su contraseña?
             <h2 className="w-full text-xs font-semibold mb-4 text-sky-600">Contactar con administración</h2>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Login