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

  const handleImagenClick = (x,y) => {
    setPoint({ x, y });
    setShow(true);
  };

  const [show, setShow] = useState(false);

  const [point, setPoint] = useState({ x: 0, y: 0 });
  
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 ">
        <AgregarSeccionBoton onClickAgregar={handleNavigateSeccion}/>
        <Secciones onSeccionClick={handleSeccionClick} barcoId={barcoId} setSeccionId={setSeccionId}/>
      </div>
      <div className="basis-1/2">
        <AgregarPunto setShow={setShow}/>
        {show ? (
        <div>
          {point.x === 0 && point.y === 0 ? (
            <p className="bg-gray-200 p-4">El punto es (0, 0).</p>
          ) : (
            <p className="bg-gray-200 p-4">El punto es ({point.x}, {point.y}).</p>
          )}
        </div>
        ) : (
          <p></p>
        )}
        <Imagen imagenBarco={imagen} onImagenClick={handleImagenClick}/>
      </div>
    </div>

  );
}

export default MenuSeccion