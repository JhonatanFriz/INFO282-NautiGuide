import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import BarcoCard from './BarcoCard';
import VerBarco from './VerBarco';


function ListaBarcos({ setImagenSeleccionada, setShow }) {
  const [barcos, setBarco] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get('/barco/');
      setBarco(res.data.data);
    };
    fetchPosts();
  }, []);

  const handleBarcoClick = (imagen) => {
    setImagenSeleccionada(imagen);
    setShow(true);
  };

  return (
    <div className="bg-gray-100 ">
      <div><h2 className="text-xl font-semibold mb-4">Barcos Registrados</h2></div>
        
        <ul>
        <div className="grid grid-cols-3 ">
          {barcos.length > 0 ? (
            barcos.map((barco, index) => (
              
              
              <li key={index} >
               
                
                <BarcoCard
                  barco={barco}
                  onBarcoClick={handleBarcoClick}
              
              /> 
              </li>
                
              
              
            ))
          ) : (
            <li>No hay barcos registrados.</li>
          )}
          </div>
        </ul>
        
      </div>
      
  );
}

export default ListaBarcos;
