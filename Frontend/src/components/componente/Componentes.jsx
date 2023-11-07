import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import ComponenteCard from './ComponenteCard';

function Componentes({setComponente, setShow, barcoId, seccionId,eliminar}){

    const [comps, setComps] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get(`/componente/${seccionId}`);
            setComps(res.data.data);
        };
        fetchPosts();
    }, []);

    const handleComponenteClick = (comp) => {
        setComponente(comp);
        setShow(true);
    }

    const handleEliminacion = (componenteId) => {
        const url = `/componente/${componenteId}`;
        clientAxios.delete(url);
        window.location.reload();    
    };
    

    return (
        <div>
            <ul>
                {comps.length > 0 ? (
                    comps.map((comp, index) => (
                        <li key={index} className="flex items-center">
                            <ComponenteCard
                                comp={comp}
                                onComponenteClick={handleComponenteClick}
                            />
                            
                            {eliminar ? (
                                <button type="submit"
                                    className="bg-red-500 text-white mb-2 py-1 px-2 shadow-md rounded"
                                    onClick={() => handleEliminacion(comp.id)}
                                >
                                    x
                                </button>
                            ) : (<></>)}
                        </li>
                    ))
                ) : (
                    <li>No hay componentes registrados.</li>
                )}
            </ul>
        </div>
    )
}

export default Componentes;