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
    <div className='bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% h-screen p-1 '>
      <div className='flex w-full items-center justify-center m-2'>
        <div className='flex text-white items-center justify-center m-2'>
        <l1>Buscador:</l1>
        </div>
        <div className='flex w-2/3 text-black  justify-left m-2'>
        <input
          className='bg-white w-full h-6'
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="🔍︎ Escriba aqui ..."
        /> 
        </div>
      </div>
      <div className='flex h-3/4 justify-center overflow-auto'>
        <div className='w-2/3 overflow-auto'>
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