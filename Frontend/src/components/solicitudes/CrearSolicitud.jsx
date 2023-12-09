import React, {useState } from 'react';
import clientAxios from '../config/clienteAxios';
import {useNavigate } from "react-router-dom";

//falta conectarlo con la base de datos
//falta desarrollar que la caja de texto de la descripcion no se sature
const CrearSolicitud = () => {
  const [titulo, settituloBarco] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [remitente, setremitente] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const navigateToBack = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(titulo && descripcion && remitente)) { // Verifica si el campo de rol está vacío
      setError('Por Favor ingrese todos los datos'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }
    navigateToBack(`/solicitudes`);
    try {
      await clientAxios.post(`/solicitud`, {
          title: titulo,
          description: descripcion,
          date: remitente,
      });
  } catch (error) {
    console.log(error);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      // Evitar el salto de línea al presionar Enter
      event.preventDefault();
      // Puedes manejar el envío del mensaje o realizar alguna otra acción aquí
    }
  };

  const calculateTextAreaHeight = () => {
    const lineHeight = 20; // Ajusta según el tamaño de la línea en píxeles
    const rows = Math.max(text.split('\n').length, 4); // Mínimo de 4 filas
    return `${rows * lineHeight}px`;
  };
    

  };

  return (
    <div className="bg-blue-950 p-4 h-screen flex justify-center items-center ">
      <div className="relative bg-white p-4 rounded-md border-8 w-1/2 justify-center items-center">
        
      <h2 className="text-xl font-semibold mb-4 flex justify-center items-center ">Crear Solicitud</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titulo" className="block font-medium mb-1">
            Titulo
          </label>
          <input
            type="text"
            id="titulo"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={titulo}
            onChange={(e) => settituloBarco(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-medium mb-1">
            Descripción
          </label>
          <textarea
            type="text"
            rows= "4"
            id="descripcion"
            placeholder="Escribe aquí..."
            className=" chat-container flex h-40 w-full px-4 py-2 rounded border  focus:border-blue-500 "
            value={descripcion}

            onChange={(e) => setdescripcion(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />

        </div>

        <div className="mb-4">
          <label htmlFor="remitente" className="block font-medium mb-1">
            Remitente(Nombre de usuario puesto de forma automatica)
          </label>
          <input
            type="text"
            id="remitente"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={remitente}
            onChange={(e) => setremitente(e.target.value)}
          />
        </div>
        


        {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si existe */}
        <div className="flex justify-center items-center">
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
          >
            Añadir Solicitud
            </button>
        </div>
      </form>
    </div>
    </div>
  );
};
 export default CrearSolicitud ;




