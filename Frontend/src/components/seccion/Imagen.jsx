import React, { useState } from 'react';

const imagen = ( {imagenBarco, show} ) => {

  console.log(imagenBarco)
  
  return (
    <div className="bg-gray-200 flex flex-col p-4 h-screen">
      <img src={imagenBarco} alt="Modelo" />
    </div>
    
  );
};

export default imagen