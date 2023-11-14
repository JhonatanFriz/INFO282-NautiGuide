import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import AgregarPunto from './AgregarPunto';
import AgregarSeccionBoton from "./AgregarSeccionBoton";
import Imagen from "./Imagen"
import Secciones from "./Secciones"

import ModalPunto from './ModalPunto';

function MenuSeccion() {
  // Usar useLocation para acceder a la información de la ubicación
  const location = useLocation();
  const barcoSeleccionado = location.state.barcoSeleccionado;

  // Se guardan las variables de lo recibido
  const barcoId = barcoSeleccionado.id
  const imagen = barcoSeleccionado.image
  const [modalVisible, setModalVisible] = useState(false);

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

  const [seccionesModal, setSeccionesModal] = useState([]);

  const [show, setShow] = useState(false);
  const handleImagenClick = (e) => {
    // Obtenemos la posición del clic dentro de la imagen
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // Actualizamos el punto seleccionado
    setPoint({ x, y });

    setModalVisible(true);
  };

  const[eliminar,setEliminar] = useState(false);

  const handleEliminar = () => {
    setEliminar(!eliminar)
  };


  const [point, setPoint] = useState({ x: null, y: null });
  
  return (
    <div className="flex">
      <div className="bg-gray-100 basis-1/2 h-screen overflow-auto flex flex-col">
        <div className="flex justify-between px-2 py-2 ">
          <h2 className="text-xl font-semibold mb-2">Secciones Registradas</h2>
          <AgregarSeccionBoton
            onClickAgregar={handleNavigateSeccion}
            onClickEliminar={handleEliminar}
          />
        </div>
        <div className="p-2 overflow-auto flex-1">
          <Secciones
            onSeccionClick={handleSeccionClick}
            barcoId={barcoId} setSeccionId={setSeccionId}
            setSeccionesModal = {setSeccionesModal}
            eliminar={eliminar}
          />
        </div>
      </div>
      <div className="bg-gray-200 basis-1/2 h-screen">
        <AgregarPunto setShow={setShow} show={show}/>
        {show ? (
          <div>
            {point.x === null && point.y === null ? (
              <p className="p-4">Seleccione un punto</p>
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
        <ModalPunto isOpen={modalVisible} punto={point} onClose={() => setModalVisible(false)} secciones ={seccionesModal}/>

      </div>
    </div>

  );
}

export default MenuSeccion