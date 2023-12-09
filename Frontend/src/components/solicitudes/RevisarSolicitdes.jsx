
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SolicitudCard from './SolicitudCard';

const RevisarSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect (() => {



      const fetchPosts = async () => {
          const res = await clientAxios.get('/solicitud/');
          setSolicitudes(res.data.data);
        };
        fetchPosts();

  }, [])


  return (
      <div className="w-1/3 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Solicitudes Registrados</h2>
        <ul>
          {solicitudes.length > 0 ? (
            solicitudes.map((solicitud, index) => (
                  <SolicitudCard  key={index} solicitud={solicitud}/>
            ))
          ) : (
            <li>No hay solicitudes registrados.</li>
          )}
        </ul>
      </div>
    );  
}

export default RevisarSolicitudes;