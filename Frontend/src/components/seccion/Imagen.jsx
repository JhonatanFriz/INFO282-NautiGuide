import React, { useState } from 'react';

const imagen = ( {imagenSeccion, show} ) => {

  return (

    <div className="bg-gray-200 flex flex-col p-4 items-center h-screen">
 
      {show ? (
        
        <img src={imagenSeccion} alt="Imagen en grande" />
        
        
      ) : (
        
        <p>No hay imagen para mostrar.</p>
      )}
    </div>
    
  );
};

export default imagen