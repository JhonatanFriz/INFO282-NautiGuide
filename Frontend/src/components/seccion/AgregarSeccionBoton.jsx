import React, { useEffect, useState } from 'react';

function AgregarSeccionBoton({onClickAgregar,onClickEliminar}) {
    return (
        
        <div className="flex justify-end">
            <button
            type="submit"
            className="bg-blue-500 text-white px-2 mr-2 rounded"
            onClick={onClickAgregar}
            >
                +
            </button>
            <button
            type="submit"
            className="bg-red-500 text-white px-2 rounded"
            onClick={onClickEliminar}
            >
                x
            </button>
        </div>
    );
}

export default AgregarSeccionBoton;