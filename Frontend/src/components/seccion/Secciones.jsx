import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones() {

  const [seccion, setSeccion] = useState([]);

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Secciones</h2>
      <ul>
        <div className="grid grid-cols-3 ">
        {seccion.length > 0 ? (
          seccion.map((seccion, index) => (            
            <li key={index} >              
              <SeccionCard
                seccion={seccion}
                onSeccionClick={onSeccionClick}            
            /> 
            </li>
          ))
        ) : (
          <li>No hay secciones registrados.</li>
        )}
        </div>
      </ul>
    </div>
  );
}
  
  export default Secciones