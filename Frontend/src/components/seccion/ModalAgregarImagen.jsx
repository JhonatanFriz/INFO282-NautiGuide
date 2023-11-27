import React, { useState } from 'react';
import clientAxios from '../config/clienteAxios';

const ModalAgregarImagen = ({setAbierto, seccionId, setShow}) => {

    const [URL,setURL] = useState('');

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
            setAbierto(false)
            setShow(true)
            return;          
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }

    const handleNoSubmit = () => {
        setAbierto(false)
    }

    return (
    <div className="modal-overlay">
        <div className="modal-dialog flex flex-col">
            <div className="modal-content">
                <h2 className="text-xl font-semibold mb-4 text-center">Agregar Imagen</h2>
                <form>
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
                    <div className="flex justify-center">
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-1.5 mr-2 rounded"
                                onClick = {handleSubmit}
                            > Agregar </button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-1.5 mr-2 rounded"
                                onClick = {handleNoSubmit}
                            > Cancelar </button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    )
}

export default ModalAgregarImagen;