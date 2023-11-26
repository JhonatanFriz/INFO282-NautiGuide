import React, { useState } from 'react';

const VerBarco = ({ imagenSeleccionada, show}) => {

  return (
    <div className="bg-gray-200 flex flex-col p-4 items-center">
      {show ? (
        <img
          src={imagenSeleccionada}
          alt="Imagen en grande"
          style={{
            objectFit: 'contain',
            height: 500,
          }}
        />
      ) : (
        <p>Selecciona un barco</p>
      )}
    </div>
    
  );
};

export default VerBarco;

