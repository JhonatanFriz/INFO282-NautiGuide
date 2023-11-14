import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones({onSeccionClick, barcoId, setSeccionId, setSeccionesModal, eliminar}) {
  
  const [secciones, setSecciones] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get(`/seccion/${barcoId}/seccion`);
      setSecciones(res.data.data);
      setSeccionesModal(res.data.data);
    };
    fetchPosts();
  }, []);

  const handleEliminacion = (seccionId) => {
    const url = `/seccion/${seccionId}`;
    clientAxios.delete(url);
    window.location.reload();    
  };


  return (
    <div>        
        <ul>
          {secciones.length > 0 ? (
            secciones.map((seccion, index) => (
              
              <li key={index} className="flex items-center">
                <SeccionCard
                  seccion={seccion}
                  onSeccionClick={() => onSeccionClick(seccion)}
                  isExpanded={expandedCard === seccion.id}
                  onToggleExpand={() => {
                    console.log('Sección ID seleccionada:', seccion.id);
                    setSeccionId(seccion.id);
                    setExpandedCard((prevExpanded) =>
                      prevExpanded === seccion.id ? null : seccion.id
                    )
                  }}
                />
                {eliminar ? (
                  <button type="submit"
                  className="bg-red-500 text-white mb-2 py-1 px-2 shadow-md rounded"
                  onClick={() => handleEliminacion(seccion.id)}>
                    x
                  </button>
                ) : (<></>)}
              </li>

            ))
          ) : (
            <li>No hay secciones registradas.</li>
          )}
        
        </ul>
        
    </div>
      
  );
}

export default Secciones