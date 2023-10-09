import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clientAxios from './config/clienteAxios';

import AgregarPunto from './seccion/AgregarPunto';
import AgregarSeccion from "./seccion/AgregarSeccion";
import Imagen from "./seccion/Imagen"
import Secciones from "./seccion/Secciones"


function Seccion() {

  const [imagenBarco, setimagenBarco] = useState(null);

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="basis-1/2 ">
        <AgregarSeccion />
        <Secciones />
      </div>
      <div className="basis-1/2">
        <AgregarPunto />
        <Imagen imagenBarco={imagenBarco} show={show}/>
      </div>
    </div>

  );
}

export default Seccion