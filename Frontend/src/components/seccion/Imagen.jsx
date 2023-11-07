import React, { useState } from 'react';

const imagen = ( { imagenBarco,onImagenClick } ) => {

  const [selectedPoint, setSelectedPoint] = useState({ x: null, y: null });

  const handleImageClick = (e) => {
    // Obtenemos la posición del clic dentro de la imagen
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Actualizamos el punto seleccionado
    setSelectedPoint({ x, y });
  };


  return (
    <div className="bg-gray-200 flex flex-col p-4 h-screen">
      <img
        src={imagenBarco}
        alt="Modelo"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      <p className="bg-gray-200 p-4">
        {selectedPoint.x !== null && selectedPoint.y !== null
          ? `Coordenadas del punto seleccionado: (${selectedPoint.x}, ${selectedPoint.y})`
          : 'Haz clic en la imagen para seleccionar un punto.'}
      </p>
    </div>
  );
};

export default imagen