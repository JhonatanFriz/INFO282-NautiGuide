import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';

function AgregarBarco() {

    
  const [nombre, setNombreBarco] = useState('');
  const [imagen, setImagen] = useState('');
  const [modelo, setModelo] = useState('');
  const [personalizado, setPersonalizado] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!personalizado) { // Verifica si el campo de rol está vacío
      setError('Seleccione si el barco es personalizado antes de enviar el registro.'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }

    try {
      const { data } = await clientAxios.post(`/users`, {
        name: nombre,
        image:imagen,
        model: modelo,
        password: contraseña,
        personalizado: personalizado,
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="p-4 bg-black shadow-md h-screen flex justify-center items-center ">
      <div className="p-4 bg-white rounded-md border-8 w-1/2 justify-center items-center">
      <h2 className="text-xl font-semibold mb-4 flex justify-center items-center ">Reguistar Barco</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre del Barco
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={nombre}
            onChange={(e) => setNombreBarco(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imagen" className="block font-medium mb-1">
            Imagen
          </label>
          <input
            type="image"
            id="imagen"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="modelo" className="block font-medium mb-1">
            Modelo
          </label>
          <input
            type="model"
            id="modelo"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="personalizado" className="block font-medium mb-1">
            Personalizado
          </label>
          <select
            id="personalizado"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={personalizado}
            onChange={(e) => setPersonalizado(e.target.value)}
          >
            <option value="">Seleccione rol</option>
            <option value="Si">SI</option>
            <option value="No">NO</option>
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

export default AgregarBarco;
