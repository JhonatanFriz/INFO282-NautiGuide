import React, { useEffect, useState } from 'react';

function AgregarComponenteBoton({onClickAgregar,onClickEliminar}) {
    return (
        <div className="flex justify-end py-1">
            <button
                type="submit"
                className="bg-blue-500 text-white px-1.5 mr-2 rounded"
                onClick={onClickAgregar}
            >
                +
            </button>
            <button
                type="submit"
                className="bg-red-500 text-white px-2 rounded"
                onClick={onClickEliminar}
            >
                Eliminar
            </button>
        </div>
      );
}

export default AgregarComponenteBoton;