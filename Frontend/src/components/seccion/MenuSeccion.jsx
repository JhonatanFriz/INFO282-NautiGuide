import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import AgregarPunto from './AgregarPunto';
import AgregarSeccionBoton from "./AgregarSeccionBoton";
import Imagen from "./Imagen"
import Secciones from "./Secciones"



function MenuSeccion() {

  const [imagenBarco, setimagenBarco] = useState(null);
  const [show, setShow] = useState(false);


  return (
    <div className="flex flex-row  bg-gray-400">
      <div className="basis-1/4 ">
        <AgregarSeccionBoton />
        <Secciones />
      </div>
      <div className="basis-3/4">
        <AgregarPunto />
        <Imagen imagenBarco={imagenBarco} show={show}/>
      </div>
    </div>

  );
}

export default MenuSeccion