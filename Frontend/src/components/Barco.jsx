import React, { useState } from 'react';
import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';
import AgregarBarco from './barco/AgregarBarco';
import AgregarPunto from './barco/AgregarPunto';

const Barco = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const [show, setShow] = useState(false);
        
    return (
        <div className="grid grid-cols-2">
            <div className="bg-gray-400"> 
                <AgregarBarco />
                <ListaBarcos setImagenSeleccionada={setImagenSeleccionada} setShow={setShow} />
            </div>
            <div className="bg-gray-200"> 
                <AgregarPunto />
                <VerBarco imagenSeleccionada={imagenSeleccionada} show={show} />
            </div>
            {console.log(show)}
        </div>
    );
}


export default Barco