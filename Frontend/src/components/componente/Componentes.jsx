import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import ComponenteCard from './ComponenteCard';

function Componentes({setComponente, setShow, barcoId, seccionId,editar,activarModalComponente}){

    const [comps, setComps] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get(`/componente/seccion/${seccionId}`);
            setComps(res.data.data);
        };
        fetchPosts();
    }, []);

    const handleComponenteClick = (comp) => {
        setComponente(comp);
        setShow(true);
    }

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
                            
                            {editar ? (
                                <button type="submit"
                                    className="bg-green-500 text-white mb-2 p-1 shadow-md rounded"
                                    onClick={() => activarModalComponente(comp.id)}
                                >
                                    ✎
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