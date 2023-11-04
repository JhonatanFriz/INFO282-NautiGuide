import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Buscador from './barco/Buscador';
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
    const navigateTo2 = useNavigate();

    const handleNavigateBarco = () => {
        navigateTo(`/barco:${barcoId}/menuseccion`, {state: {barcoSeleccionado} });
    };
    const handleNavigateAgregar = () => {
        navigateTo2(`/agregar_barco`);
    };

        
    return (
        <div className="flex">

            <div className="bg-gray-100 basis-1/2 p-2"> 
                <Buscador/>
                <BotonBarco onClickSeleccion={handleNavigateAgregar}  className="items-end"/>
                <ListaBarcos
                    setBarcoSeleccionado={setBarcoSeleccionado}
                    setShow={setShow}
                />
            </div>
            
            <div className="bg-gray-200 basis-1/2 p-4"> 
                <VerBarco imagenSeleccionada={imagenSeleccionada} show={show} />
                <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barcoId}</h2>
                <Seleccion show={show} onClickSeleccion={handleNavigateBarco}/>
            </div>
        </div>
    );
}


export default Barco