import React, { useState,useEffect } from 'react';
import clientAxios from './config/clienteAxios';
import NombresBarcos from './barco/NombresBarcos';
// const datos = [
//   { id: 1, nombre: 'Motor' },
//   { id: 2, nombre: 'Vela' },
//   { id: 3, nombre: 'Sistema De Ventilacion' },
//   { id: 4, nombre: 'Sistema De Movimiento' },
//   { id: 5, nombre: 'Sistema Electrico' },
//   { id: 6, nombre: 'Valvulas' },
//   { id: 7, nombre: 'Timon' },
//   { id: 8, nombre: 'Sistema De Redes' },
// ];

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const [barcos, setBarco] = useState([]);

  
  useEffect(() => {
    const fetchPosts = async () => {
    // Realizar una solicitud al servidor para obtener los barcos
    const res = await clientAxios.get('/barco/') 
        setBarco(res.data.data);
      };
      fetchPosts();
    }, []);
  return (
    <div className='bg-white'>
    <div className='flex justify-center'>
      <l1>Buscador:</l1>
      <input
        className='bg-blue-200 w-2/3 h-6'
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="🔍︎ Escriba aqui ..."
      /> 
    </div>
      {busqueda.length > 0 ? (
        <ul>
        {barcos
          .filter((barco) => barco.name.toLowerCase().includes(busqueda.toLowerCase() ) || barco.model.toLowerCase().includes(busqueda.toLowerCase()))
          .map((barco, index) => (
            <li key={index} >
            <NombresBarcos
              barco={barco}

            />
          </li>
          ))}
      </ul>
      ) : (
        <p></p>
      )}
    </div>

  );
}

export default Buscador;