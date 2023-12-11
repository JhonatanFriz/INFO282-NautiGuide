import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import Imagen3d from "./Imagen3d";

function Informacion ({ barco, seccion, expandedCard, onSeccionClick,handle360Boton, handlecerrar360Boton, ver360,handleAbrirModal }) {

    // Control de imagen 360
    const [urlImagen,setUrlImagen] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await clientAxios.get(`/imagen3d/${seccion.id}`);
        if (res.data.data != null){
            const imageUrl = res.data.data.image.replace(/"/g, '');
            setUrlImagen(imageUrl);
        }
        else{
            setUrlImagen(null);
        }
        };
        if (seccion != null){
            fetchPosts();
        }
    }, [expandedCard]);

    return(
        <div className='h-screen'>
            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: 5,
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
            >
                {barco.name}
            </h1>
            <div className='flex h-2/3'>
                {/* NADA SELECCIONADO*/}
                {expandedCard == null ? (
                    <><div className='basis-2/3 flex flex-col justify-center'>
                        <h1
                            style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontStyle: 'italic'
                            }}
                        >Seleccione algún sistema</h1>
                    </div>
                    <div className="basis-1/3 flex flex-col justify-center p-1">
                        <div className='bg-gray-300 p-2 shadow-md'
                            style={{
                                borderRadius: 5
                            }}
                        >
                            <img
                                src={barco.image}
                                alt="Barco"
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: 5
                                }}
                            />
                        </div>
                    </div></>
                ) : (
                    <>{/* SISTEMA SELECCIONADO*/}
                    {!ver360 ? (
                        <>
                        <div className='basis-2/3 flex flex-col px-4'>
                            <h2 
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}
                            >
                                {seccion.name}
                            </h2>
                            <div className='flex flex-col h-screen justify-between p-2 overflow-auto'>
                                <div className='h-full mb-4 border-4 border-gray-500 bg-white rounded px-2 overflow-auto'>
                                    <h1
                                        style={{
                                            textAlign: 'left',
                                            margin: '0',
                                            marginTop: 10
                                        }}>
                                        {seccion.description}
                                    </h1>
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        onClick={onSeccionClick}
                                    >
                                        Seleccionar Sistema
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col justify-center p-1">
                            <div className='bg-gray-300 p-2 shadow-md'
                                style={{
                                    borderRadius: 5
                                }}
                            >
                                <img
                                    src={seccion.image}
                                    alt="Imagen"
                                    style={{
                                        objectFit: 'contain',
                                        borderRadius: 5,
                                    }}
                                />
                            </div>
                        </div></>
                    ) : (
                        <div className=' w-full h-screen flex flex-col px-4'>
                            <Imagen3d
                                urlImagen = {urlImagen}
                            />
                            <div className=' flex flex-col h-1/8 justify-center items-center pt-5 pb-8'>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
                                    onClick={handlecerrar360Boton}
                                >
                                    Cerrar imagen 360
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    onClick={handleAbrirModal}
                                >
                                    Editar imagen 360
                                </button>
                            </div>
                        </div>
                    )}</>
                )}
            </div>
            {(expandedCard != null && !ver360) && (
                <div className=' flex h-1/8 justify-center items-center pt-8 pb-8'>
                    { urlImagen != null ? (
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onClick={handle360Boton}
                        >
                            Ver imagen 360
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onClick={handleAbrirModal}
                        >
                            Agregar imagen 360
                        </button>
                    )}
                </div>
            )}
        </div>
    )

}
export default Informacion;