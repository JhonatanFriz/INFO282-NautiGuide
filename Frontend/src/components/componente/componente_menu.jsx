import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import Componentes from './Componentes';
import Informacion from './Informacion';
import AgregarComponenteBoton from './BotonAgregarComponente';
import ModalEdicionComponente from "./ModalEdicionComponente";

function MenuSeccion() {
    // Se agregan los location del url
    const location = useLocation();
    const { barcoSeleccionado, seccion} = location.state;

    const barcoId = barcoSeleccionado.id;
    const barcoNombre = barcoSeleccionado.name;
    const seccionId = seccion.id;
    const seccionNombre = seccion.name;
    

    // Se manejan las variables

    // Se maneja el cambio de página
    const navigateTo = useNavigate();
    const handleBoton = () => {
        navigateTo(`/barco:${barcoId}/seccion:${seccionId}/agregar_componente`, {
            state: {
            barcoSeleccionado: barcoSeleccionado,
            seccion: seccion
            },
        });
    };

    const[editar,setEditar] = useState(false);

    const handleEditar = () => {
        setEditar(!editar)
      };

    const handleBarcosClick  = () => {
        navigateTo(`/barco`);
    }

    const handleBarcoClick  = () => {
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    }

    const [activarEdicion,setActivarEdicion] = useState(false);
    const [componenteEditar, setComponenteEditar] = useState(null);
 

    const activarModalComponente = (componenteId) => {
        setActivarEdicion(true);
        setComponenteEditar(componenteId);
    }
    
    const [componenteSelect, setComponenteSelect] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);
    const handleComponenteClick = (comp) => {
        setComponenteSelect(comp);
        setExpandedCard((prevExpanded) =>
          prevExpanded === comp.id ? null : comp.id
        );
    }

    return(
        <div className="flex h-screen w-screen">
            <div className="bg-gray-100 basis-1/4 flex flex-col">
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
                    /<strong className="font-bold">{seccionNombre}</strong>
                </h2>


                <div className="flex justify-between px-2">
                    <h2 className="text-xl font-semibold mb-2">Componentes</h2>
                    <AgregarComponenteBoton
                        onClickAgregar={handleBoton}
                        onClickEditar={handleEditar}
                    />
                </div>
                <div className="p-2 overflow-auto flex-1">
                    <Componentes
                        handleComponenteClick={handleComponenteClick}
                        expandedCard={expandedCard}
                        seccionId={seccionId}
                        editar={editar}
                        activarModalComponente={activarModalComponente}
                    />
                </div>
            </div>


            <div className="bg-gray-200 basis-3/4 overflow-auto">
                <Informacion
                    seccion={seccion}
                    componente={componenteSelect}
                    expandedCard={expandedCard}
                />
            </div>
            

            {/* MODALES */}
            {activarEdicion && (
            <>
                <ModalEdicionComponente
                    componenteEditar={componenteEditar}
                    setActivarEdicion={setActivarEdicion}
                />                
            </>
            )}
        </div>
    )
}

export default MenuSeccion