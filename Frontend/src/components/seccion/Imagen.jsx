import React, { useState } from 'react';

const imagen = ( { imagenBarco,handleImageClick,show } ) => {

  return (
    <div className="bg-gray-200 flex flex-col p-4 h-screen">
      {show ? (
        <img
          src={imagenBarco}
          alt="Modelo"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          src={imagenBarco}
          alt="Modelo"
        />
      )}
    </div>
  );
};

export default imagen