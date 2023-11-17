import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

function Imagen3d(){

    const location = useLocation();
    const barcoSeleccionado = location.state.barcoSeleccionado;
    const barcoNombre = barcoSeleccionado.name;
    const barcoId = barcoSeleccionado.id;

    const navigateTo = useNavigate();
    const handleBarcosClick  = () => {
        navigateTo(`/barco`);
    }

    const handleBarcoClick  = () => {
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    }

    return(
        <div className="bg-gray-100 flex flex-col h-screen">
            <h2 className="text-l px-2">
                <a
                    style={{cursor: 'pointer'}}
                    onClick={handleBarcosClick}
                    className="hover:underline focus:outline-none focus:ring focus:border-blue-300"
                >
                    Barcos
                </a>
                /
                <a
                    style={{cursor: 'pointer'}}
                    onClick={handleBarcoClick}
                    className="hover:underline focus:outline-none focus:ring focus:border-blue-300"
                >
                    {barcoNombre}
                </a>
                /<strong className="font-bold">Imagen3d</strong>
            </h2>        </div>
    )
}
export default Imagen3d