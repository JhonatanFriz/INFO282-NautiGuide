import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';

function AgregarBarco() {
const redireccionarA = (ruta) => {
    props.history.push(ruta);
};
return (
    <div className="bg-gray-100 flex justify-end items-end">
    <button onClick={() => redireccionarA('/pagina1')}>Ir a Página 1</button>

        <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
        Agregar barco
        </button>
    </div>
  );
}

export default AgregarBarco;
