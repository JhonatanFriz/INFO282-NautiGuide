import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import BarcoCard from './BarcoCard';


function ListaBarcos({ setBarcoSeleccionado, setShow, eliminar }) {


  // Para manejar el barco que se está seleccionando
  const [barcos, setBarco] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get('/barco/');
      setBarco(res.data.data);
    };
    fetchPosts();
  }, []);

  const handleEliminacion = (barcoId) => {
    const url = `/barco/${barcoId}`;
    clientAxios.delete(url);
    window.location.reload();
  };

  const handleBarcoClick = (barco) => {
    setBarcoSeleccionado(barco);
    setShow(true);
  };

  return (
    <div className="bg-gray-100 p-1">
      <ul>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 overflow-auto">
          {barcos.length > 0 ? (
            barcos.map((barco, index) => (
              
              <li key={index} >
                <BarcoCard
                  barco={barco}
                  onBarcoClick={handleBarcoClick}
                  handleEliminacion={handleEliminacion}
                  eliminar={eliminar}
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
