import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SeccionCard from './SeccionCard';

function Secciones() {

  const [seccion, setSeccion] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get('/menuseccion/');
      setSeccion(res.data.data);
    };
    fetchPosts();
  }, []);

  const handleSeccionClick = ([imagen,id]) => {
    setSeccionId(id);
    setImagenSeleccionada(imagen);
    setShow(true);
  };



  return (
    <div className="bg-gray-100 ">
      <div><h2 className="text-xl font-semibold mb-4">Secciones Registrados</h2></div>
        
        <ul>
        <div className="grid grid-cols-3 ">
          {seccion.length > 0 ? (
            seccion.map((seccion, index) => (
              
              <li key={index} >
                <SeccionCard
                  seccion={seccion}
                  onSeccionClick={handleSeccionClick}
                />
              </li>

            ))
          ) : (
            <li>No hay seccion registrados.</li>
          )}
          </div>
        </ul>
        
      </div>
      
  );
}
  
  export default Secciones