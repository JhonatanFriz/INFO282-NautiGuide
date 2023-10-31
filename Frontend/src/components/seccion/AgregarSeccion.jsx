import React, { useState } from 'react';
import clientAxios from '../config/clienteAxios';
import {  useLocation, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const AgregarSeccion = () => {

    // Los elementos a rellenar
    const [nombre, setNombre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [esParaBarco, setEsParaBarco] = useState('')

    // Se trae el barcoId
    const location = useLocation();
    const barcoSeleccionado = location.state.barcoSeleccionado;
    const barcoId = barcoSeleccionado.id

    const navigateToBack = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            if (esParaBarco === 'UNICO') {
                await clientAxios.post(`/seccion/${barcoId}/seccion`, {
                    name: nombre,
                    description: description,
                    image: image,
                });
            } else {
                await clientAxios.post(`/seccion`, {
                    name: nombre,
                    description: description,
                    image: image,
                });
            }
            navigateToBack(`/${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
        } catch (error) {
          console.log(error);
        }
      };

      /*
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            if (esParaBarco === 'UNICO') {
                await clientAxios.post(`/seccion`, {
                    name: nombre,
                    description: description,
                    image: image,
                    barcoId: barcoId,
                });
            } else {
                await clientAxios.post(`/seccion`, {
                    name: nombre,
                    description: description,
                    image: image,
                });
            }

        } catch (error) {
          console.log(error);
        }
        navigateToBack(`/barco:${barcoId}/menuseccion`, {state: {barcoId} });
      };
      */

      return (
        <div className="bg-blue-950 min-h-screen ">
            <div className="bg-white p-4 rounded-lg mx-auto max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Agregar Sección</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
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
                        <label htmlFor="nombre" className="block font-medium mb-1">
                            Descripción
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-medium mb-1">
                            URL de la imagen
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
                        <label htmlFor="rol" className="block font-medium mb-1">
                            Es para el barco
                        </label>
                        <select
                            id="esParaBarco"
                            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                            value={esParaBarco}
                            onChange={(e) => setEsParaBarco(e.target.value)}
                        >
                            <option value="">Es para el barco</option>
                            <option value="UNICO">Sí</option>
                            <option value="GENERAL">No</option>
                        </select>
                    </div>
                    <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
                    >
                        Añadir Seccion
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )
      
}

export default AgregarSeccion;