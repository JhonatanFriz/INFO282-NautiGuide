import React, { useState } from 'react';
import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';

const Barco = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const [show, setShow] = useState(false);
        
    return (
        <div className="flex h-screen">
            <ListaBarcos setImagenSeleccionada={setImagenSeleccionada} setShow={setShow} />
            <VerBarco imagenSeleccionada={imagenSeleccionada} show={show} />
            {console.log(show)}
        </div>
    );
}


export default Barco