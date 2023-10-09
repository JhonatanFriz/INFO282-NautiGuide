import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';
import BotonBarco from './barco/BotonBarco';
import Seleccion from './barco/Seleccion';

const Barco = () => {

    // Para manejar la imagen seleccionada
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    
    // Para manejar si se muestra
    const [show, setShow] = useState(false);

    // Para manejar la id del barco seleccionado
    const [barcoId, setBarcoId] = useState(null);

    // Para navegar a la id
    const navigateTo = useNavigate();
    const navigateTo2 = useNavigate();

    const handleNavigateBarco = () => {
        navigateTo(`/seccion/${barcoId}`);
    };
    const handleNavigateAgregar = () => {
        navigateTo2(`/agregar_barco`);
    };
        
    return (
        <div className="grid grid-cols-2">

            <div className="bg-gray-400"> 
                <BotonBarco onClickSeleccion={handleNavigateAgregar}/>
                <ListaBarcos setBarcoId={setBarcoId} setImagenSeleccionada={setImagenSeleccionada} setShow={setShow} />
            </div>
            
            <div className="bg-gray-200"> 
                <VerBarco imagenSeleccionada={imagenSeleccionada} show={show} />
                <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barcoId}</h2>
                <Seleccion show={show} onClickSeleccion={handleNavigateBarco}/>
            </div>
            {console.log(show)}
        </div>
    );
}


export default Barco