import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';
import BotonBarco from './barco/BotonBarco';
import Seleccion from './barco/Seleccion';
import ModalEdicion from './barco/ModalEdicion'

const Barco = () => {

    // Para manejar la imagen seleccionada
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    
    // Para manejar si se muestra
    const [show, setShow] = useState(false);

    // Para manejar la id del barco seleccionado
    const [barcoId, setBarcoId] = useState(null);

    const [barcoSeleccionado, setBarcoSeleccionado] = useState(null);

    useEffect(() => {
        if (show) {
          setImagenSeleccionada(barcoSeleccionado.image);
          setBarcoId(barcoSeleccionado.id);
        }
    }, [barcoSeleccionado]);
    
    

    // Para navegar a la id
    const navigateTo = useNavigate();

    const handleNavigateBarco = () => {
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    };
    const handleNavigateAgregar = () => {
        navigateTo(`/agregar_barco`);
    };

    const[eliminar,setEliminar] = useState(false);

    const handleEliminar = () => {
        setEliminar(!eliminar)
    };

    
    const [activarEdicion,setActivarEdicion] = useState(false);
    const [barcoEditar, setBarcoEditar] = useState(null);

    const handleEdicion = (barcoId) => {
        setActivarEdicion(true);
        setBarcoEditar(barcoId);
    };

        
    return (
        <div className="flex h-screen" >
            <div className="bg-gray-100 basis-1/2 overflow-auto flex flex-col"> 
                <h2 className="text-l px-2">/<strong className="font-bold">Barcos</strong></h2>
                <div className="flex justify-between px-2">
                    <h2 className="text-xl font-semibold mb-2">Barcos Registrados</h2>
                    <BotonBarco
                        onClickSeleccion={handleNavigateAgregar}
                        onClickEliminar={handleEliminar}
                        className="items-end"
                    />
                </div>
                <div className="overflow-auto flex-1"> 
                    <ListaBarcos
                        setBarcoSeleccionado={setBarcoSeleccionado}
                        setShow={setShow}
                        eliminar={eliminar}
                        handleEdicion={handleEdicion}
                    />
                </div>
            </div>
            
            <div className="bg-gray-200 basis-1/2 p-4 flex flex-col justify-center"> 
                <VerBarco
                    imagenSeleccionada={imagenSeleccionada}
                    show={show}
                />
                <Seleccion show={show} onClickSeleccion={handleNavigateBarco}/>
            </div>
            {activarEdicion && (
                <>
                    <ModalEdicion
                        barcoEditar={barcoEditar}
                        setActivarEdicion={setActivarEdicion}
                    />                
                </>
            )}


        </div>
    );
}


export default Barco