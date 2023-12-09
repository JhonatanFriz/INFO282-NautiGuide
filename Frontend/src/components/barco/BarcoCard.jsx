import React from 'react';

const BarcoCard = ({ barco, onBarcoClick,handleEdicion, eliminar }) => {
  
  return (
      <div
        className="overflow-hidden bg-gradient-to-tl from-slate-300 to-slate-100 p-2 rounded shadow-md mb-4 flex flex-col items-center relative aspect-square"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => onBarcoClick(barco)}
      >
        <div className="static">
          {eliminar && (
            <>
              <button type="submit"
              className="absolute top-2 right-2 bg-green-500 text-white mb-2 p-1 shadow-md rounded"
              onClick={() => handleEdicion(barco.id)}>
                ✎
              </button>
            </>
          )}
        </div>
        <h2 style={{ fontSize: '20px', textAlign: 'center', margin: '10px', fontWeight: 'bolder' }}>{barco.name}</h2>
        <div 
          className='flex justify-center flex-grow h-1/2'
        >
          <img
            src={barco.image}
            style={{
              objectFit: 'contain',
            }}
            alt="Imagen de barco"
          />
        </div>
      </div>
  );
};

export default BarcoCard;