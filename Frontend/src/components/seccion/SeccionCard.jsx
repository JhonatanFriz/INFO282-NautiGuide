import React, { useState } from 'react';

const SeccionCard = ({ seccion, onSeccionClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    // Cambiar el estado de expansión cuando se hace clic en la tarjeta
    setExpanded(!expanded);
  };

  return (
      <div 
        className="bg-white p-2 rounded shadow-md mb-4"
        style={cardStyle}
        onClick={handleCardClick}>
          <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{seccion.name}</h2>
          {expanded && (
            <div>
              <h2 style={{ textAlign: 'center', margin: '0'}}>{seccion.description}</h2>
              <img src={seccion.image} alt="Imagen de seccion"/>
            </div>
          )}
      </div>
  );
};

export default SeccionCard
