import React from 'react';

const SeccionCard = ({ seccion, onSeccionClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  return (
      <div className="bg-white p-4 rounded shadow-md mb-4" style={cardStyle} onClick={() => onSeccionClick(seccion.image)}>
        <img
          src={seccion.image}
          alt="Imagen de seccion"
        />
        <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{seccion.name}</h2>
      </div>
  );
};

export default SeccionCard
