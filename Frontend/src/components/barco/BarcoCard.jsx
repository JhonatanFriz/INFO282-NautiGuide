import React from 'react';

const BarcoCard = ({ barco, onBarcoClick,handleEliminacion, eliminar }) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };



  return (
      <div
        className="bg-white p-4 rounded shadow-md mb-4 flex flex-col items-center relative aspect-square overflow-auto"
        style={cardStyle}
        onClick={() => onBarcoClick(barco)}
      >
        <div className="static">
          {eliminar && (
            <>
              <button type="submit"
              className="absolute top-2 right-2 bg-red-500 text-white mb-2 py-1 px-2 shadow-md rounded"
              onClick={() => handleEliminacion(barco.id)}>
                x
              </button>
            </>
          )}
        </div>
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