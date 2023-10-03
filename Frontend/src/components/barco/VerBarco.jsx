import React, { useState } from 'react';

const VerBarco = ({ imagenSeleccionada, show}) => {

  return (
    <div className="w-1/2 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Ver Barco</h2>
      {show ? (
        <img src={imagenSeleccionada} alt="Imagen en grande" />
      ) : (
        <p>Haz clic en un barco para ver la imagen en grande.</p>
      )}
    </div>
  );
};

export default VerBarco;