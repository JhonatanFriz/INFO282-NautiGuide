import React from 'react';

function AgregarComponenteBoton({onClickAgregar,onClickEditar}) {
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
                className="bg-green-500 text-white px-1 rounded"
                onClick={onClickEditar}
            >
                ✎
            </button>
        </div>
      );
}

export default AgregarComponenteBoton;