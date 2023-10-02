import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';

function AgregarBarco() {
    const [barcos, setBarco] = useState([]);

    useEffect (() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get('/barco/');
            setBarco(res.data.data);
          };
          fetchPosts();
          
          console.log(barcos)
    }, [])


    return (
        <div className="w-1/2 bg-gray-100 p-4">
            <img src="../assets/Plus-Symbol.png" class="imagen-derecha"/>
        </div>
      );
}

export default AgregarBarco;