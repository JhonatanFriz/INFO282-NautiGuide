import React from 'react';
import { useAuth } from '../AuthContext';

function BotonBarco({onClickSeleccion,onClickEliminar}) {
  const { userRole } = useAuth();
    return(
        <div className="flex justify-end py-1 ">
            <button
              type="submit"
              className="bg-amber-400 text-black px-1.5 mr-2 rounded"
              // onClick={onClickFavoritos}

          >
            Favoritos ✪
          </button>
          {/* Mostrar el botón "+" solo si el usuario tiene el rol "ADMIN" */}
      {userRole === 'ADMIN' && (
        <button
          type="submit"
          className="bg-blue-500 text-white px-1.5 mr-2 rounded"
          onClick={onClickSeleccion}
        >
          +
        </button>
      )}
      {userRole === 'ADMIN' && (
          <button
            type="submit"
            className="bg-green-500 text-white p-1 rounded"
            onClick={onClickEliminar}
          >
              ✎
          </button>
        )}
      </div>
      );
      } 
export default BotonBarco;