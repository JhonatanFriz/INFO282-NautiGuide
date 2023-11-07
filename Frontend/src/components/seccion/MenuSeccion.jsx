import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import AgregarPunto from './AgregarPunto';
import AgregarSeccionBoton from "./AgregarSeccionBoton";
import Imagen from "./Imagen"
import Secciones from "./Secciones"



function MenuSeccion() {
  // Usar useLocation para acceder a la información de la ubicación
  const location = useLocation();
  const barcoSeleccionado = location.state.barcoSeleccionado;

  // Se guardan las variables de lo recibido
  const barcoId = barcoSeleccionado.id
  const imagen = barcoSeleccionado.image
  
  const [seccionId, setSeccionId] = useState(null);

  // Maneja la redireccion a agregar_seccion, se le envia barcoId
  const navigateTo = useNavigate();
  const handleNavigateSeccion = () => {
    navigateTo(`/barco:${barcoId}/agregar_seccion`, {state: {barcoSeleccionado} });
  };

  // Para manejar las secciones
  const handleSeccionClick = () => {
    navigateTo(`/barco:${barcoId}/seccion:${seccionId}/componente`, {
      state: {
        barcoId: barcoId,
        seccionId: seccionId
      },
    });
  };

  const [show, setShow] = useState(false);
  const handleImagenClick = (e) => {
    // Obtenemos la posición del clic dentro de la imagen
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Actualizamos el punto seleccionado
    setPoint({ x, y });
  };


  const [point, setPoint] = useState({ x: null, y: null });
  
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 ">
        <AgregarSeccionBoton onClickAgregar={handleNavigateSeccion}/>
        <Secciones onSeccionClick={handleSeccionClick} barcoId={barcoId} setSeccionId={setSeccionId}/>
      </div>
      <div className="basis-1/2">
        <AgregarPunto setShow={setShow} show={show}/>
        {show ? (
          <div>
            {point.x === null && point.y === null ? (
              <p className="bg-gray-200 p-4">Seleccione un punto</p>
            ) : (
              <p className="bg-gray-200 p-4">El punto es ({point.x}, {point.y}).</p>
            )}
          </div>
        ):(<p></p>)}
        <Imagen
          imagenBarco={imagen}
          handleImageClick={handleImagenClick}
          show={show}
        />
      </div>
    </div>

  );
}

export default MenuSeccion