import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import ComponenteCard from './ComponenteCard';

function Componentes({setComponente, setShow, barcoId, seccionId}){

    const [comps, setComps] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await clientAxios.get(`/componente/${barcoId}/${seccionId}`);
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
            <div><h2 className="text-xl font-semibold mb-2">Componentes</h2></div>
            <ul>
                {comps.length > 0 ? (
                    comps.map((comp, index) => (
                        <li key={index} >
                            <ComponenteCard
                                comp={comp}
                                onComponenteClick={handleComponenteClick}
                            />
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