import React, { useState } from 'react';
import clientAxios from '../config/clienteAxios';
import {  useLocation, useNavigate } from "react-router-dom";

const AgregarComponente = () => {

    // Los elementos a rellenar
    const [nombre, setNombre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [esParaBarco, setEsParaBarco] = useState('')

    // Se trae el barcoId
    const location = useLocation();
    const { barcoId, seccionId} = location.state;

    const navigateToBack = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await clientAxios.post(`/componente/${seccionId}`, {
                name: nombre,
                description: description,
                image: image,
            });
            navigateToBack(`/barco:${barcoId}/seccion:${seccionId}/componente`, {
                state: {
                    barcoId: barcoId,
                    seccionId: seccionId
                },
            });
        } catch (error) {
          console.log(error);
        }
      };

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

export default AgregarComponente;