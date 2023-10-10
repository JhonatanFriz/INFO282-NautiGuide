import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones({onClickSeccion}) {
  
  const [seccion, setSeccion] = useState([]);

  return (
    <div className="bg-gray-100 ">
      <div><h2 className="text-xl font-semibold mb-4">Secciones Registrados</h2></div>
        
        <ul>

          {seccion.length > 0 ? (
            seccion.map((seccion, index) => (
              
              <li key={index} >
                <SeccionCard
                  seccion={seccion}
                  onSeccionClick={onClickSeccion}
                />
              </li>

            ))
          ) : (
            <li>No hay secciones registrados.</li>
          )}
        
        </ul>
        
      </div>
      
  );
}
  
  export default Secciones