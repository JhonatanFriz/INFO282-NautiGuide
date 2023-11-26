import React from 'react';

const BarcoCard = ({ barco, onBarcoClick,handleEliminacion, eliminar }) => {
  
  return (
      <div
        className="bg-gradient-to-tl from-slate-300 to-slate-100 p-2 rounded shadow-md mb-4 flex flex-col items-center justify-between relative aspect-square"
        style={{
          cursor: 'pointer',
        }}
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
        <div className="">
          <img
            src={barco.image}
            style={{
              objectFit: 'contain',
              height: 150,
            }}
            alt="Imagen de barco"
          />
        </div>

        <div className="p-2">
          <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>{barco.name}</h2>
          <h2 style={{ textAlign: 'center', margin: '0' }}>{barco.model}</h2>
        </div>
      </div>
  );
};

export default BarcoCard;