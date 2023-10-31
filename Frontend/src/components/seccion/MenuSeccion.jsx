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

  // Maneja la redireccion a agregar_seccion, se le enviar barcoId
  const navigateTo = useNavigate();
  const handleNavigateSeccion = () => {
    navigateTo(`/barco:${barcoId}/agregar_seccion`, {state: {barcoSeleccionado} });
  };

  // Para manejar las secciones
  const handleSeccionClick = () => {
  };

  const handleBarcoClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setPoint({ x, y });
    setShow(true);
  };

  const [show, setShow] = useState(false);

  const [point, setPoint] = useState({ x: 0, y: 0 });
  
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 ">
        <AgregarSeccionBoton onClickAgregar={handleNavigateSeccion}/>
        <Secciones onClickSeccion={handleSeccionClick} barcoId={barcoId}/>
      </div>
      <div className="basis-1/2">
        <AgregarPunto setShow={setShow}/>
        {show ? (
        <div>
          <p className="bg-gray-200 p-4">Presiona un punto.</p>
          <div
              style={{
                position: 'absolute',
                left: point.x,
                top: point.y,
                width: '10px',
                height: '10px',
                background: 'red',
                borderRadius: '50%',
              }}
            ></div>
          </div>
        ) : (
          <p></p>
        )}
        <Imagen imagenBarco={imagen}/>
      </div>
    </div>

  );
}

export default MenuSeccion