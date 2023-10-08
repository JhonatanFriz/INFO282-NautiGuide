import React, { useState } from 'react';

const VerBarco = ({ imagenSeleccionada, show}) => {

  return (

    
    <div className="bg-gray-200 flex flex-col p-4 items-center">
 
      {show ? (
        
        <img src={imagenSeleccionada} alt="Imagen en grande" />
        
        
      ) : (
        
        <p>Haz clic en un barco para ver la imagen en grande.</p>
      )}
    </div>
    
  );
};

export default VerBarco;