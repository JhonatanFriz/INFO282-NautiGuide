import { useState,useEffect } from "react";
import clientAxios from '../config/clienteAxios';


const FullSolicitudCard = ({solicitud}) => {
    const [user,setUser] = useState(null);
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await clientAxios.get(`/users/1`);
        console.log(res.data.data)
      };
      fetchPosts();
    }, []);
    
    
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <strong>Titulo:</strong> {solicitud.title}<br />
            <strong>Descripción:</strong> {solicitud.description}<br />
            <strong>Fecha:</strong> {solicitud.date}<br />
            <strong>Remitente:</strong> {user}<br />
        </div>
    )
}

export  default FullSolicitudCard