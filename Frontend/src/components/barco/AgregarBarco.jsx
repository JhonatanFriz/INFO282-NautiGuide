import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import { useNavigate } from "react-router-dom";

function AgregarBarco() {

    
  const [nombre, setNombreBarco] = useState('');
  const [image, setImage] = useState('');
  const [modelo, setModelo] = useState('');
  const [personalizado, setPersonalizado] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const navigateToBack = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!(nombre && image && modelo)) { // Verifica si el campo de rol está vacío
      setError('Por Favor ingrese todos los datos'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }
    if (!personalizado) { // Verifica si el campo de rol está vacío
      setError('Seleccione si el barco es personalizado antes de enviar el registro.'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }

    // Convertir la cadena "personalizado" en un valor booleano
    const isPersonalizado = personalizado === 'Si' ? true : false;
    try {
      const { data } = await clientAxios.post(`/barco`, {
        name: nombre,
        model: modelo,
        image: image,
        personalizado: isPersonalizado, // Aquí se envía como booleano,
      });
    } catch (error) {
      console.log(error);
    }
    navigateToBack(`/barco`);
  };

  return (
    <div className="p-4 bg-blue-800 shadow-md h-screen flex justify-center items-center ">
      <div className="p-4 bg-white rounded-md border-8 w-1/2 j  ustify-center items-center">
      <h2 className="text-xl font-semibold mb-4 flex justify-center items-center ">Registrar Barco</h2>
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
          <label htmlFor="modelo" className="block font-medium mb-1">
            Modelo
          </label>
          <input
            type="text"
            id="modelo"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Imagen
          </label>
          <input
            type="text"
            id="image"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            <option value="">Seleccione Sí o No</option>
            <option value="Si">SÍ</option>
            <option value="No">NO</option>
          </select>
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si existe */}
        <div className="flex justify-center items-center">
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
          >
            Añadir Barco
            </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AgregarBarco;
