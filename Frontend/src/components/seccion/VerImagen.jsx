import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import Imagen3d from "./Imagen3d";

function VerImagen({ expandedCard, setAbierto, show, imagenSeccion, barcoNombre,seccionId }){


    return(
        <div>
            {expandedCard == null ? (
                <div className="flex flex-col p-4 items-center">
                    <h1
                        style={{
                            textAlign: 'center',
                            marginBottom: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                    >{barcoNombre}</h1>
                    <img
                        src={imagenSeccion}
                        alt="Modelo"
                        style={{
                            objectFit: 'contain',
                            /*width: 800, (Se bugueaba la imagen)*/
                            borderRadius: 2
                        }}
                    />
                    <h1
                        style={{
                            textAlign: 'center',
                            marginTop: 15,
                            fontSize: 20,
                        }}
                        >Seleccione un sistema
                    </h1>
                </div>
            ) : (
                <div>
                    {show ? (
                        <Imagen3d
                            seccionId = {seccionId}
                            expandedCard = {expandedCard}
                        />
                    ) : (
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-1.5 mr-2 rounded p-2"
                                onClick={setAbierto}
                            >
                                Agregar imagen
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>        
    );
}

export default VerImagen;