import React, { useState, useEffect } from 'react';
import clientAxios from '../config/clienteAxios';

const ModalEdicionSeccion = ({seccionEditar,setActivarEdicion}) => {

    const [nombre, setNombre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect (() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get(`/seccion/${seccionEditar}`);
            setNombre(res.data.data.name);
            setDescription(res.data.data.description);
            setImage(res.data.data.image);
          };
          fetchPosts();
    }, [])

    const handleEliminar = () => {
        const url = `/seccion/${seccionEditar}`;
        clientAxios.delete(url);
        window.location.reload();
        
        setActivarEdicion(false);
    }

    const handleNoSubmit = () => {
        setActivarEdicion(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(nombre && image && description)) {
            setError('Por Favor ingrese todos los datos');
            return;
        }
        try {
            const { data } = await clientAxios.put(`/seccion/${seccionEditar}`, {
              name: nombre,
              description: description,
              image: image,
            });
            console.log(data)
        } catch (error) {
            console.log(error);
        }
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
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-1.5 mr-2 rounded"
                            onClick = {handleEliminar}
                        > Eliminar sistema </button>
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
};

export default ModalEdicionSeccion;