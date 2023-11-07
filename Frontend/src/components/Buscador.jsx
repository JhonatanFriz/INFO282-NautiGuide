import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import clientAxios from './config/clienteAxios';
import NombresBarcos from './barco/NombresBarcos';

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const [barcos, setBarco] = useState([]);


  const [barcoSelec, setBarcoSelec] = useState(null)
  const [barcoId, setBarcoId] = useState(null)
  

  const navigateTo = useNavigate();
  const handleBarcoClick = (barcoSeleccionado) => {
    navigateTo(`/barco:${barcoSeleccionado.id}/menuseccion`, {state: {barcoSeleccionado}});
  };
  
  useEffect(() => {
    const fetchPosts = async () => {
    // Realizar una solicitud al servidor para obtener los barcos
    const res = await clientAxios.get('/barco/') 
        setBarco(res.data.data);
      };
      fetchPosts();
    }, []);
  return (
    <div className='h-screen bg-sky-300'>
      <div className='flex justify-center'>
        <l1>Buscador:</l1>
        <input
          className='bg-white w-2/3 h-6'
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="🔍︎ Escriba aqui ..."
        /> 
      </div>
      <div className='flex justify-center'>
      <div className='w-2/3 '>
      {busqueda.length > 0 ? (
        <ul>
        {barcos
          .filter((barco) => barco.name.toLowerCase().includes(busqueda.toLowerCase() ) || barco.model.toLowerCase().includes(busqueda.toLowerCase()))
          .map((barco, index) => (
            <li key={index} >
            <NombresBarcos
              barco={barco}
              onBarcoClick={handleBarcoClick}
            />
          </li>
          ))}
      </ul>
      ) : (
        <p></p>
      )}
      </div>
    </div>
    </div>
  );
}

export default Buscador;