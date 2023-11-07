import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones({onSeccionClick, barcoId, setSeccionId, setSeccionesModal}) {
  
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

  return (
    <div className="bg-gray-100 h-screen">
      <div><h2 className="text-xl font-semibold mb-2">Secciones Registradas</h2></div>
        
        <ul>

          {secciones.length > 0 ? (
            secciones.map((seccion, index) => (
              
              <li key={index} >
                <SeccionCard
                  seccion={seccion}
                  onSeccionClick={onSeccionClick}
                  isExpanded={expandedCard === seccion.id}
                  onToggleExpand={() => {
                    console.log('Sección ID seleccionada:', seccion.id);
                    setSeccionId(seccion.id);
                    setExpandedCard((prevExpanded) =>
                      prevExpanded === seccion.id ? null : seccion.id
                    )
                  }}
                />
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