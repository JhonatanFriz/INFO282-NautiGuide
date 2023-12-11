import React, { useState, useEffect } from 'react';

const informacion = ({componente, seccion, expandedCard}) => {

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
                {seccion.name}
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
                        >Seleccione algún componente</h1>
                    </div>
                    <div className="basis-1/3 flex flex-col justify-center p-1">
                        <div className='bg-gray-300 p-2 shadow-md'
                            style={{
                                borderRadius: 5
                            }}
                        >
                            <img
                                src={seccion.image}
                                alt="Seccion"
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: 5
                                }}
                            />
                        </div>
                    </div></>

                ) : (
                    <>{/* COMPONENTE SELECCIONADO*/}
                        <div className='basis-2/3 flex flex-col px-4'>
                            <h2 
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}
                            >
                                {componente.name}
                            </h2>
                            <div className='flex flex-col h-screen justify-between p-2 overflow-auto'>
                                <div className='h-full mb-4 border-4 border-gray-500 bg-white rounded px-2 overflow-auto'>
                                    <h1
                                        style={{
                                            textAlign: 'left',
                                            margin: '0',
                                            marginTop: 10
                                        }}>
                                        {componente.description}
                                    </h1>
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
                                    src={componente.image}
                                    alt="Imagen"
                                    style={{
                                        objectFit: 'contain',
                                        borderRadius: 5,
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default informacion