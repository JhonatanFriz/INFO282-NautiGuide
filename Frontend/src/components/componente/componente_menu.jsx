import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import Componentes from './Componentes';
import Informacion from './Informacion';
import AgregarComponenteBoton from './BotonAgregarComponente';

function MenuSeccion() {
    // Se agregan los location del url
    const location = useLocation();
    const { barcoSeleccionado, seccion} = location.state;

    const barcoId = barcoSeleccionado.id;
    const barcoNombre = barcoSeleccionado.name;
    const seccionId = seccion.id
    const seccionNombre = seccion.name
    

    // Se manejan las variables
    const [componente, setComponente] = useState(null);
    const [show, setShow] = useState(false);

    // Se maneja el cambio de página
    const navigateTo = useNavigate();
    const handleBoton = () => {
        navigateTo(`/barco:${barcoId}/seccion:${seccionId}/agregar_componente`, {
            state: {
            barcoId: barcoId,
            seccionId: seccionId
            },
        });
    };

    const[eliminar,setEliminar] = useState(false);
    const handleEliminar = () => {
        setEliminar(!eliminar)
    };

    

    return(
        <div className="flex">
            <div className="bg-gray-100 basis-1/2 h-screen flex flex-col">
                <div className="p-2">
                    <h2 className="text-l mb-2">{barcoNombre}/{seccionNombre}/<strong className="font-bold">Componentes</strong></h2>
                </div>
                <div className="flex justify-between px-2 py-2">
                    <h2 className="text-xl font-semibold mb-2">Componentes</h2>
                    <AgregarComponenteBoton
                        onClickAgregar={handleBoton}
                        onClickEliminar={handleEliminar}
                    />
                </div>
                <div className="px-2 overflow-auto flex-1">
                    <Componentes
                        setComponente={setComponente}
                        setShow={setShow}
                        barcoId={barcoId}
                        seccionId={seccionId}
                        eliminar={eliminar}
                    />
                </div>
            </div>
            <div className="bg-gray-200 basis-1/2 h-screen overflow-auto">
                <Informacion
                    componente={componente}
                    show={show}
                />
            </div>
        </div>
        
        )



}

export default MenuSeccion