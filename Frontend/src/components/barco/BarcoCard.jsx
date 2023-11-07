import React from 'react';

const BarcoCard = ({ barco, onBarcoClick }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };



  return (
      <div
        className="bg-white p-4 rounded shadow-md mb-4 flex flex-col items-center relative aspect-square overflow-auto"
        style={cardStyle}
        onClick={() => onBarcoClick(barco)}
      >
        <div className="flex-2/3">
          <img
            src={barco.image}
            className="w-32 h-24 flip-horizontal-bottom "
            alt="Imagen de barco"
          />
        </div>

        <div className="flex-1/3 p-2">
          <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barco.name}</h2>
          <h2 style={{ textAlign: 'center', margin: '0' }}>{barco.model}</h2>
        </div>
      </div>
  );
};

export default BarcoCard;