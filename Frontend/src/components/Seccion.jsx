import React, { useState, useEffect } from "react";
import Componentes from './seccion/Componentes';
import Imagen from './seccion/Imagen';
import AgregarPunto from './seccion/AgregarPunto';
import { useParams } from "react-router-dom";
import clientAxios from './config/clienteAxios';


function Seccion() {
  const { barcoId, seccionId } = useParams();
  const [seccion, setSeccion] = useState(null);

  // Usar barcoId para cargar las secciones relacionadas con ese barco
  useEffect(() => {
    const fetchSeccion = async () => {
      try {
        const response = await clientAxios.get(`/barco/${barcoId}/seccion/${seccionId}`);
        setSeccion(response.data);
      } catch (error) {
        console.error("Error al obtener la sección:", error);
      }
    };

    fetchSeccion();
  }, [barcoId, seccionId]);

  return (
    <div className="bg-white flex h-screen">
        {seccion ? (
            <>
                <div>
                    <h2>{seccion.name}</h2>
                    <Componentes />
                </div>
                <div>
                    <AgregarPunto />
                    <Imagen imagenSeccion={seccion.image} />
                </div>
            </>
        ) : (
            <p>Cargando la sección...</p>
        )}
    </div>
  );
}

export default Seccion;