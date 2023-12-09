import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones({
  onSeccionClick,
  barcoId,
  setShow,
  setSeccionId,
  setSeccionesModal,
  editar,
  setOutsideExpandedCard,
  activarModalEdicion
}) {
  
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

  const handleExpanded = (seccion) => {
    console.log('Sección ID seleccionada:', seccion.id);
    setSeccionId(seccion.id);
    setExpandedCard((prevExpanded) =>
      prevExpanded === seccion.id ? null : seccion.id
    );
    setOutsideExpandedCard((prevExpanded) =>
      prevExpanded === seccion.id ? null : seccion.id
    );
    const fetchPosts = async () => {
      const res = await clientAxios.get(`/imagen3d/${seccion.id}`);
      if (res.data.data) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    }
    fetchPosts();

  }


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
                  onToggleExpand={() => handleExpanded(seccion)}
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
            <li>No hay secciones registradas.</li>
          )}
        
        </ul>
        
    </div>
      
  );
}

export default Secciones