import React from 'react';

function BotonBarco({onClickSeleccion,onClickEliminar}) {
    return(
        <div className="flex justify-end  ">
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 mr-2 rounded"
            onClick={onClickSeleccion}
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
export default BotonBarco;