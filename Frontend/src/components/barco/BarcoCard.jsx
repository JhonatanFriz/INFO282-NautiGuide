import React from 'react';

const BarcoCard = ({ barco, onBarcoClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  const nombreStyle = {
    fontWeight: 'bold', // Aplicar el estilo de fuente en negrita
  };

  return (
      <div className="bg-white p-4 rounded shadow-md mb-4" style={cardStyle} onClick={() => onBarcoClick(barco.image)}>
        <img
          src={barco.image}
          alt="Imagen de barco"
        />
        <h2 style={nombreStyle}>{barco.name}</h2>
        <h2>{barco.model}</h2>
      </div>
  );
};

export default BarcoCard;
