import React, { useState } from 'react';
import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';

const Barco = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    
    return (
        <div className="flex h-screen">
            <ListaBarcos setImagenSeleccionada={setImagenSeleccionada} />
            <VerBarco barco={imagenSeleccionada} />
        </div>
    );
}


export default Barco