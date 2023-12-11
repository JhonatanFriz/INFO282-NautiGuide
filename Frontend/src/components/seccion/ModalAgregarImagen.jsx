import React, { useState, useEffect } from 'react';
import clientAxios from '../config/clienteAxios';

const ModalAgregarImagen = ({setActivar, seccionId}) => {

    const [error, setError] = useState('');

    const [URL,setURL] = useState('');
    const [esPut,setEsPut] = useState(false);
    const [imagenId, setImagenId] = useState(null);

    
    useEffect (() => {
        const fetchPosts = async () => {
            try{
                const res = await clientAxios.get(`/imagen3d/${seccionId}`);
                if (res.data.data.image != null){
                    setURL(res.data.data.image);
                    setImagenId(res.data.data.id)
                    setEsPut(true);
                }
            } catch {};
        };
        fetchPosts();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(URL)) { 
            setError('Por Favor ingrese todos los datos');
            return;
        }
        try {
            const {data} = await clientAxios.post(`/imagen3d`, {
                image: URL,
                seccioneId: seccionId,
            })       
        } catch (error) {
            console.log(error);
        }
        setActivar(false)
        window.location.reload();
    }

    const handleSubmitPut = async (e) => {
        e.preventDefault();
        if (!(URL)) { 
            setError('Por favor ingrese todos los datos');
            return;
        }
        try {
            console.log(imagenId)
            const {data} = await clientAxios.put(`/imagen3d/${imagenId}`, {
                image: URL
            }) 
            console.log(data)
        } catch (error) {
            console.log(error);
        }
        setEsPut(false);
        setActivar(false)
        window.location.reload();
    }

    const handleNoSubmit = () => {
        setEsPut(false);
        setActivar(false)
    }

    return (
    <div className="modal-overlay">
        <div className="modal-dialog flex flex-col">
            <div className="modal-content">
                <h2 className="text-xl font-semibold mb-4 text-center">Agregar Imagen</h2>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block font-medium mb-1">
                        URL
                    </label>
                    <input
                        type="text"
                        id="url"
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                        value={URL}
                        onChange={(e) => setURL(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-center">
                    { esPut ? (
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-1.5 mr-2 rounded"
                            onClick = {handleSubmitPut}
                        > Actualizar </button>
                    ):(
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-1.5 mr-2 rounded"
                                onClick = {handleSubmit}
                            > Agregar </button>
                        </div>
                    ) }
                    
                    <div>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-1.5 mr-2 rounded"
                            onClick = {handleNoSubmit}
                        > Cancelar </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModalAgregarImagen;