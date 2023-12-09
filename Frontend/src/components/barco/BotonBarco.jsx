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
            className="bg-green-500 text-white px-1 rounded"
            onClick={onClickEliminar}
          >
              ✎
          </button>
      </div>
      );
      } 
export default BotonBarco;