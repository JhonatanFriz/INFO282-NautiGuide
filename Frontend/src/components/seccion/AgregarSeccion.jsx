import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';

function AgregarSeccion() {
    return (
        <div className="bg-gray-100 flex justify-center items-center">
            <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
            Agregar seccion
            </button>
        </div>
      );
}

export default AgregarSeccion;