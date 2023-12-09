import React, { useState, useEffect } from 'react';
import clientAxios from '../config/clienteAxios';

const ModalEdicion = ({barcoEditar,setActivarEdicion}) => {

    const [nombre, setNombreBarco] = useState('');
    const [modelo, setModelo] = useState('');
    const [image, setImage] = useState('');

    useEffect (() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get(`/barco/${barcoEditar}`);
            setNombreBarco(res.data.data.name);
            setModelo(res.data.data.model);
            setImage(res.data.data.image);
          };
          fetchPosts();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(nombre && image && modelo)) {
            setError('Por Favor ingrese todos los datos');
            return;
        }
        try {
            const { data } = await clientAxios.put(`/barco/${barcoEditar}`, {
              name: nombre,
              model: modelo,
              image: image,
            });
            console.log(data)
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
        setActivarEdicion(false);
    }
    
    const handleNoSubmit = () => {
        setActivarEdicion(false);
    }

    const handleEliminar = () => {
        const url = `/barco/${barcoEditar}`;
        clientAxios.delete(url);
        window.location.reload();
        
        setActivarEdicion(false);
    }

    

    return(
        <div className="modal-overlay">
            <div className="modal-dialog flex flex-col">
                <div className="modal-content">
                    <h2 className="text-xl font-semibold mb-4 text-center">Editar Barco</h2>
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
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-1.5 mr-2 rounded"
                            onClick = {handleEliminar}
                        > Eliminar barco </button>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-1.5 mr-2 rounded"
                                onClick = {handleSubmit}
                            > Actualizar </button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-gray-500 text-white px-1.5 mr-2 rounded"
                                onClick = {handleNoSubmit}
                            > Cancelar </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEdicion;