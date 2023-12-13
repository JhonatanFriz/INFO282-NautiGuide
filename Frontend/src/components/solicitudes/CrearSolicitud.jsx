import React, {useEffect,useState } from 'react';
import clientAxios from '../config/clienteAxios';
import {useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { useAuth } from '../AuthContext';


const CrearSolicitud = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error
  const navigateToBack = useNavigate();
  const { userId, userName } = useAuth();
  useEffect(() => {
    const obtenerFechaHoraActual = () => {
      const ahora = new Date();
      const formatoFechaHora = format(ahora, 'dd-MM-yyyy HH:mm');
      return formatoFechaHora;
    };

    // Establecer la fecha y hora actual como valor inicial
    setFecha(obtenerFechaHoraActual());
  }, [])

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    // Limitar la longitud del texto a 1200 caracteres
    if (inputValue.length <= 1200) {
      setDescripcion(inputValue);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(titulo && descripcion)) { // Verifica si el campo de rol está vacío
      setError('Por Favor ingrese todos los datos'); // Establece un mensaje de error
      return; // Impide el envío del formulario
    }
    navigateToBack(`/solicitudes`);
    try {
      await clientAxios.post(`/solicitud`, {
          title: titulo,
          description: descripcion,
          userId: localStorage.getItem('userId'),
          date:fecha,
      });
  } catch (error) {
    console.log(error);
  }


  };



  return (
    <div className="bg-blue-950 p-4 h-screen flex justify-center items-center ">
      <div className="relative bg-white p-4 rounded-md border-8 w-1/2 justify-center items-center">
        
      <h2 className="text-xl font-semibold mb-4 flex justify-center items-center ">Crear Solicitud</h2>
      <form onSubmit={handleSubmit}>


        <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Remitente
            </label>
            <input
              type="text" // Utilizamos type "text" para almacenar como cadena
              id="remitente"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={userName}
              disabled
            />
          </div>


        <div className="mb-4">
          <label htmlFor="titulo" className="block font-medium mb-1">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-medium mb-1">
            Descripción
          </label>
          <textarea
            rows="4"
            id="descripcion"
            placeholder="Escribe aquí..."
            className="chat-container flex h-40 w-full px-4 py-2 rounded border focus:border-blue-500"
            value={descripcion}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <p>Caracteres restantes: {1200 - descripcion.length}</p>
    </div>
        

        <div className="mb-4">
      <label htmlFor="fecha" className="block font-medium mb-1">
        Fecha y Hora de Creación
      </label>
      <input
        type="text" // Utilizamos type "text" para almacenar como cadena
        id="fecha"
        className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
        value={fecha}
        disabled

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