import React from 'react';

function BotonBarco({onClickSeleccion,onClickEliminar}) {

    return(
        <div className="flex justify-end py-1 ">
            <button
              type="submit"
              className="bg-amber-400 text-black px-1.5 mr-2 rounded"
              // onClick={onClickFavoritos}

          >
            Favoritos ✪
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-1.5 mr-2 rounded"
            onClick={onClickSeleccion}
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
export default BotonBarco;