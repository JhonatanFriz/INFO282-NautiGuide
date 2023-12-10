import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import AgregarSeccionBoton from "./AgregarSeccionBoton";
import Informacion from "./Informacion";

import Secciones from "./Secciones"

import ModalAgregarImagen from './ModalAgregarImagen';
import ModalEdicionSeccion from "./ModalEdicionSeccion";

function MenuSeccion() {
  
  // Usar useLocation para acceder a la información de la ubicación
  const location = useLocation();
  const barcoSeleccionado = location.state.barcoSeleccionado;

  // Se guardan las variables de lo recibido
  const barcoId = barcoSeleccionado.id;
  const barcoNombre = barcoSeleccionado.name;
  const imagen = barcoSeleccionado.image;

  // Navigates: Barra superior
  const navigateTo = useNavigate();
  const handleBarcosClick  = () => {
    navigateTo(`/barco`);
  }

  // Navigates: Barra botones admin
  const handleAgregarSeccion = () => {
    navigateTo(`/barco:${barcoId}/agregar_seccion`, {state: {barcoSeleccionado} });
  };

  const[editar,setEditar] = useState(false);
  const handleEditar = () => {
    setEditar(!editar)
  };

  // Control del navigate a la seccion
  
  const handleNavigateSeccion = () => {
    navigateTo(`/barco:${barcoId}/seccion:${seccionSelect.id}/componente`, {
      state: {
        barcoSeleccionado: barcoSeleccionado,
        seccion: seccionSelect
      },
    });
  };

  // Control de la carta seleccionada
  const [expandedCard, setExpandedCard] = useState(null);
  const [seccionSelect, setSeccionSelect] = useState(null);
  const onToggleSelect = (seccion) =>{
    setSeccionSelect(seccion);
    setVer360(false)
    setExpandedCard((prevExpanded) =>
      prevExpanded === seccion.id ? null : seccion.id
    );
  }

  // Control del modal de edición
  const [activarEdicion,setActivarEdicion] = useState(false);
  const [seccionEditar, setSeccionEditar] = useState(null);
  const activarModalEdicion = (seccionId) => {
    setActivarEdicion(true);
    setSeccionEditar(seccionId);
  };

  // Control modal agregar imagen 360
  const [activarModal360,setActivarModal360] = useState (false); 
  const handleAbrirModal = () => {
    setActivarModal360(true);
  }


  // Manejar boton 360
  const [ver360, setVer360] = useState(false);

  const handle360Boton = () => {
      setVer360(true);
  }

  return(
    <div className="flex h-screen w-screen">
      <div className="bg-gray-100 basis-1/4 overflow-auto flex flex-col">
        <h2 className="text-l px-2">
          <a
            style={{cursor: 'pointer'}}
            onClick={handleBarcosClick}
            className="hover:underline focus:outline-none focus:ring focus:border-blue-300"
          >
            Barcos
          </a>
          /<strong className="font-bold">{barcoNombre}</strong></h2>
        <div className="flex justify-between px-2">
          <h2 className="text-xl font-semibold mb-2">Sistemas del barco</h2>
          <AgregarSeccionBoton
            onClickAgregar={handleAgregarSeccion}
            onClickEditar={handleEditar}
          />
        </div>
        <div className="p-2 overflow-auto flex-1">
          <Secciones
            barcoId={barcoId}
            editar={editar}
            activarModalEdicion={activarModalEdicion}
            onToggleSelect={onToggleSelect}
          />
        </div>
      </div>

      <div className="bg-gray-200 p-1 flex-1 flex-col justify-center">
        <Informacion
          barco={barcoSeleccionado}
          seccion={seccionSelect}
          expandedCard={expandedCard}
          onSeccionClick={handleNavigateSeccion}
          handle360Boton={handle360Boton}
          ver360={ver360}
          handleAbrirModal={handleAbrirModal}
        />
      </div>
      
      {/* MODALES */}
      {activarEdicion && (
        <>
          <ModalEdicionSeccion
              seccionEditar={seccionEditar}
              setActivarEdicion={setActivarEdicion}
          />                
        </>
      )}
      {activarModal360 && (
        <>
          <ModalAgregarImagen
            setActivar={setActivarModal360}
            seccionId={seccionSelect.id}
          />
        </>
      )}
    </div>
  );

}

export default MenuSeccion