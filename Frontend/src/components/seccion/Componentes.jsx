import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import ComponenteCard from './ComponenteCard';

function Componentes() {

    const [componentes, setComponentes] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await clientAxios.get('/componentes/');
          setComponentes(res.data.data);
        };
        fetchPosts();
    }, []);
    
    const handleComponenteClick = () => {
        
    };
    
    return (
      <div className="bg-gray-100">
        <div><h2 className="text-xl font-semibold mb-4">Componentes</h2></div>
        <div className="grid grid-cols-3">
          <ul>
            {componentes.length > 0 ? (
              componentes.map((componente, index) => (
                <li key={index}>
                  <ComponenteCard
                    componente={componente}
                    onComponenteClick={handleComponenteClick}
                  />
                </li>
              ))
            ) : (
              <li>No hay componentes registrados.</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Componentes;