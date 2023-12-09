
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import SolicitudCard from './SolicitudCard';

function ListaSolicitudes() {
    const [solicitudes , setSolicitudes ] = useState([]);

    useEffect (() => {

        const fetchPosts = async () => {
            const res = await clientAxios.get('/soliciud/');
            setPaper(res.data.data);
          };
          fetchPosts();
        

    }, [])


    return (
        <div className="w-1/2 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold mb-4">Papers Registrados</h2>
          <ul>
            {solicitudes.length > 0 ? (
              solicitudes.map((solicitudes, index) => (
                    <SolicitudCard key={index} title={title} date={date}/>
              ))
            ) : (
              <li>No hay papers registrados.</li>
            )}
          </ul>
        </div>
      );  
}

export default ListaSolicitudes;
