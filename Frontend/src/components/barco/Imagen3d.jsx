import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import { Link } from "react-router-dom";


import { Viewer } from '@photo-sphere-viewer/core';

function Imagen3d(){

    const location = useLocation();
    const barcoSeleccionado = location.state.barcoSeleccionado;
    const barcoNombre = barcoSeleccionado.name;
    const barcoId = barcoSeleccionado.id;

    const navigateTo = useNavigate();

    const handleBarcoClick  = () => {
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    }

       
    useEffect(() => {
        const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
        
        const viewer = new Viewer({
            container: 'viewer',
            panorama: baseUrl + 'sphere.jpg',
            caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
            loadingImg: baseUrl + 'loader.gif',
            touchmoveTwoFingers: true,
            mousewheelCtrlKey: true,
        });

        const importMapConfig = {
            "imports": {
              "three": "https://cdn.jsdelivr.net/npm/three/build/three.module.js",
              "@photo-sphere-viewer/core": "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.module.js"
            }
        };

        return () => {
            // Realiza cualquier limpieza necesaria al desmontar el componente
            viewer.destroy();
        };
    }, []);

    return(
        <div className="bg-gray-100 flex flex-col h-screen">
            <h2 className="text-l px-2">
                <Link to="/barco" className="hover:underline focus:outline-none focus:ring focus:border-blue-300">
                    Barcos
                </Link>
                /
                <a
                    style={{cursor: 'pointer'}}
                    onClick={handleBarcoClick}
                    className="hover:underline focus:outline-none focus:ring focus:border-blue-300"
                >
                    {barcoNombre}
                </a>
                /<strong className="font-bold">Imagen3d</strong>
            </h2>
            <div className="flex justify-center py-10">
                <div id="viewer" style={{ width: '80%', height: '50%' }}></div>
            </div>
        </div>
    )
}
export default Imagen3d