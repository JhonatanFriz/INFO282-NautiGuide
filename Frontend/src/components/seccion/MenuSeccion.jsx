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

  return (
    <div className="flex flex-row">
      <div className="basis-1/2 ">
        <AgregarSeccionBoton onClickAgregar={handleNavigateSeccion}/>
        <Secciones onClickSeccion={handleSeccionClick}/>
      </div>
      <div className="basis-1/2">
        <AgregarPunto />
        <Imagen imagenBarco={imagen}/>
      </div>
    </div>

  );
}

export default MenuSeccion