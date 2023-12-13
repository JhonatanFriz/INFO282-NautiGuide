
import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import UsuarioCard from './UsuarioCard';
function ListaUsuarios() {
    const [usuarios , setUsuario ] = useState([]);

    useEffect (() => {

        const fetchPosts = async () => {
            const res = await clientAxios.get('/users/');
            setUsuario(res.data.data);
          };
          fetchPosts();
    }, [])

    const[editar, setEditar] = useState(false);
    const handleClickEditar = () => {
      setEditar(!editar);
    };

    const handleEliminacion = (userId) => {
      const url = `/users/${userId}`;
      clientAxios.delete(url);
      window.location.reload();    
    };

    const handleEdicion = (userId) => {
      /*
      const { data } = clientAxios.put(`/users/${userId}`, {
        rol: rol,
      });
      */
      window.location.reload();    
    };


    return (
        <div className="relative w-1/4 h-3/4 bg-gray-100 p-4 flex flex-col">
          <header className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
            <h2
              className=" text-blue-500 mb-4 font-semibold"
              style={{cursor: 'pointer'}}
              onClick={handleClickEditar}
            >Editar</h2>
          </header>
          <div className="overflow-auto h-full">
            <ul>
              {usuarios.length > 0 ? (
                usuarios.map((usuario, index) => (
                  <div className="flex">
                    <UsuarioCard key={index} usuario={usuario}/>
                    {editar && (
                      <div className="flex items-center">
                        <button
                          type="submit"
                          className="bg-blue-950 text-white mb-2 p-2 shadow-md rounded mr-2"
                          onClick={() => handleEdicion(usuario.id)}
                        >
                            ✎
                        </button>
                        <button
                          type="submit"
                          className="bg-red-500 text-white mb-2 p-2 shadow-md rounded"
                          onClick={() => handleEliminacion(usuario.id)}
                        >
                            x
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <li>No hay usuarios registrados.</li>
              )}
            </ul>
          </div>
        </div>
      );  
}

export default ListaUsuarios;
