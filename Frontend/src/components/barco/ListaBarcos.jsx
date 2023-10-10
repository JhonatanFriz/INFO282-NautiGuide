import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import BarcoCard from './BarcoCard';


function ListaBarcos({ setBarcoSeleccionado, setShow }) {

  // Para manejar el barco que se está seleccionando
  const [barcos, setBarco] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get('/barco/');
      setBarco(res.data.data);
    };
    fetchPosts();
  }, []);

  //Para manejar que al hacer click se setea la imagen con la imagen que se recibirá del click 
/*
  const handleBarcoClick = ([imagen,id]) => {
    setBarcoId(id);
    setImagenSeleccionada(imagen);
    setShow(true);
  };
*/

  const handleBarcoClick = (barco) => {
    setBarcoSeleccionado(barco);
    setShow(true);
  };

  return (
    <div className="bg-gray-400 p-1">
      <div>
        <h2 className="text-xl font-semibold mb-4">Barcos Registrados</h2>
      </div>
      <ul>
        <div className="grid grid-cols-3 gap-2">
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
