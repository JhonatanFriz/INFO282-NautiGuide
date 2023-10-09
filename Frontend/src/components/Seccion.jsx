import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clientAxios from './config/clienteAxios';

import AgregarPunto from './seccion/AgregarPunto';
import AgregarSeccion from "./seccion/AgregarSeccion";
import Imagen from "./seccion/Imagen"
import Secciones from "./seccion/Secciones"


function Seccion() {

  const [imagenSeccion, setimagenSeccion] = useState(null);

  const [show, setShow] = useState(false);

  return (
    <div class="flex flex-row">
      <div class="basis-1/2 ">
        <AgregarSeccion />
        <Secciones />
      </div>
      <div class="basis-1/2">
        <AgregarPunto />
        <Imagen imagenSeccion={imagenSeccion} show={show}/>
      </div>
    </div>

  );
}

export default Seccion