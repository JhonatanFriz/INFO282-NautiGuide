import React from 'react';

function BotonBarco({onClickSeleccion}) {
    return(
        <div className="bg-gray-200 flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => onClickSeleccion()}
            >
            Agregar Barco
            </button>
      </div>
      );
      } 
export default BotonBarco;