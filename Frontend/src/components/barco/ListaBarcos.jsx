import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import BarcoCard from './BarcoCard';
import VerBarco from './VerBarco';

function ListaBarcos() {
    const [barcos, setBarco] = useState([]);

    useEffect (() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get('/barco/');
            setBarco(res.data.data);
          };
          fetchPosts();
          
    }, [])


    return (
        <div className="w-1/2 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold mb-4">Barcos Registrados</h2>
          <ul>
            {barcos.length > 0 ? (
                barcos.map((barco, index) => (
                  <BarcoCard
                    key={index}
                    barco={barco}
                    onClick={() => setImagenSeleccionada(barco.image)}
                  />
                ))
            ) : (
              <li>No hay barcos registrados.</li>
            )}
          </ul>
        </div>
      );  
}

export default ListaBarcos;