import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones({ barcoId,editar,activarModalEdicion,onToggleSelect, seccionSelect, expandedCard }) {

  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get(`/seccion/${barcoId}/seccion`);
      setSecciones(res.data.data);
    };
    fetchPosts();
  }, []);

  return(
    <div>
      {secciones.length > 0 ? (
        secciones.map((seccion, index) => (
          
          <li key={index} className="flex items-center">
            <SeccionCard
              seccion={seccion}
              onToggleSelect={() => onToggleSelect(seccion)}
              isSelected={seccion.id === expandedCard}
            />
            {editar && (
              <>
                <button type="submit"
                className="bg-green-500 text-white mb-2 py-1 px-1 shadow-md rounded"
                onClick={() => activarModalEdicion(seccion.id)}>
                  ✎
                </button>
                </>
            )}
          </li>

        ))
      ) : (
        <h1>No hay sistemas registrados.</h1>
      )}
    </div>
  );
}

export default Secciones