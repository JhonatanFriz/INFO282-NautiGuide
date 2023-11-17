import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ListaBarcos from './barco/ListaBarcos';
import VerBarco from './barco/VerBarco';
import BotonBarco from './barco/BotonBarco';
import Seleccion from './barco/Seleccion';

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
        console.log(barcoSeleccionado)
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    };
    const handleNavigateAgregar = () => {
        navigateTo(`/agregar_barco`);
    };

    const[eliminar,setEliminar] = useState(false);

    const handleEliminar = () => {
        setEliminar(!eliminar)
    };

        
    return (
        <div className="flex" >
            <div className="bg-gray-100 basis-1/2 h-screen overflow-auto flex flex-col"> 
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
                    />
                </div>
            </div>
            
            <div className="bg-gray-200 basis-1/2 p-4 h-screen"> 
                <VerBarco
                    imagenSeleccionada={imagenSeleccionada}
                    show={show}
                />
                <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barcoId}</h2>
                <Seleccion show={show} onClickSeleccion={handleNavigateBarco}/>
            </div>
        </div>
    );
}


export default Barco