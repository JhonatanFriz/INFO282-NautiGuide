import React from 'react';

const BarcoCard = ({ barco, onBarcoClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  return (
      <div className="bg-white p-4 rounded shadow-md mb-4   " style={cardStyle} onClick={() => onBarcoClick(barco.image)}>
        <img
          src={barco.image}
          alt="Imagen de barco"
        />
        <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barco.name}</h2>
        <h2 style={{ textAlign: 'center', margin: '0' }}>{barco.model}</h2>
      </div>


  );
};

export default BarcoCard;
