
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SolicitudCard from './SolicitudCard';
import FullSolicitudCard from './FullSolicitudCard';

const RevisarSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [abierto, setAbierto] = useState(false);
  const [solicitud,setSolicitud] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  
  const handleclick = (id) => {
    setSolicitud (id);
    setAbierto (true);
  }


  useEffect (() => {



      const fetchPosts = async () => {
          const res = await clientAxios.get('/solicitud/');
          setSolicitudes(res.data.data);
        };
        fetchPosts();

      const fetchPosts2 = async () => {
        const res = await clientAxios.get('/users/');
        setUsuarios(res.data.data);
      };
      fetchPosts2();

      
  }, [])


  return (
    <div  className="h-screen ">
      <div className="flex h-4/5 ">
          <div className="w-1/3 bg-gray-100 p-4">
            <h2 className="text-xl font-semibold mb-4">Solicitudes Registrados</h2>
            <ul>
              {solicitudes.length > 0 ? (
                solicitudes.map((solicitud, index) => (
                      <SolicitudCard  handleclick={handleclick} key={index} solicitud={solicitud}/>
                ))
              ) : (
                <li>No hay solicitudes registrados.</li>
              )}
            </ul>
          </div>
          <div>
            {abierto && (
              <div className="ml-4 relative bg-white p-4 rounded-md border-8  justify-center items-center">
                <h2>"Remitente"</h2>
                <ul>
                    {abierto ? (
                      
                    <FullSolicitudCard  solicitud ={solicitud} usuarios={usuarios} />
                
                    ) : (
                      <li>Selecciona Alguna Solicitud</li>
                    )}
                </ul>
              </div>
               )}
          </div>
              
      </div>
    </div>
    );  
}

export default RevisarSolicitudes;