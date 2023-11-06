import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import Componentes from './Componentes';
import Informacion from './Informacion';
import AgregarComponenteBoton from './BotonAgregarComponente';

function MenuSeccion() {
    // Se agregan los location del url
    const location = useLocation();
    const { barcoId, seccionId} = location.state;

    // Se manejan las variables
    const [componente, setComponente] = useState(null);
    const [show, setShow] = useState(false);

    const navigateTo = useNavigate();
    const handleBoton = () => {
        navigateTo(`/barco:${barcoId}/seccion:${seccionId}/agregar_componente`, {
            state: {
            barcoId: barcoId,
            seccionId: seccionId
            },
        });
    };
    

    return(
        <div className="flex flex-row">
            <div className="basis-1/2 bg-gray-100 h-screen">
                <AgregarComponenteBoton onClickAgregar={handleBoton}/>
                <Componentes
                    setComponente={setComponente}
                    setShow={setShow}
                    barcoId={barcoId}
                    seccionId={seccionId}
                />
            </div>
            <div className="basis-1/2 bg-gray-200 h-screen">
                <Informacion
                    componente={componente}
                    show={show}
                />
            </div>
        </div>
        
        )



}

export default MenuSeccion