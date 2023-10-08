import React from 'react';

const ComponenteCard = ({ componente, onComponenteClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  return (
      <div className="bg-white p-4 rounded shadow-md mb-4" style={cardStyle} onClick={() => onComponenteClick(componente.image)}>
        <img
          src={componente.image}
          alt="Imagen de componente"
        />
        <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{componente.name}</h2>
      </div>
  );
};

export default ComponenteCard;
