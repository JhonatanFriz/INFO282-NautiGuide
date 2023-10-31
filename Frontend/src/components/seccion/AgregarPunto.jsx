import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';

function AgregarPunto({setShow}) {

    const handleClick = () => {
        setShow(true);
    };
    

    return (
        <div className="bg-gray-200 flex justify-center items-center">
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick = {handleClick}
            >
                Agregar punto
            </button>
        </div>
    );
}

export default AgregarPunto;