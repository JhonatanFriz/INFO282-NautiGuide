import React, { useState } from 'react';

const imagen = ({ imagenSeccion }) => {

  return (
    <div className="bg-gray-200 flex flex-col p-4 items-center">
      {show ? (
        <img src={imagenSeccion} />
      ) : (
        <p>No hay imagen disponible.</p>
      )}
    </div>
  );
};

export default imagen;