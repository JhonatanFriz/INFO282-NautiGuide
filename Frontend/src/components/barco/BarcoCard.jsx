import React, { useState } from 'react';
import VerBarco from './VerBarco';


const BarcoCard = ({barco}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <img src={barco.image} alt="Imagen de barco"/>
            </div>
        </div>
    )
}

export  default BarcoCard