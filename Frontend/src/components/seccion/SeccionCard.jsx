import React, { useState } from 'react';

const SeccionCard = ({ seccion, onSeccionClick, isExpanded, onToggleExpand}) => {
  const cardStyle = {
    cursor: 'pointer', // Cambiar el cursor a una mano cuando se puede hacer clic
  };

  return (
      <div 
        className="bg-white p-2 rounded shadow-md mb-4 grow mr-2"
        style={cardStyle}
        onClick={() => onToggleExpand()}>
          <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>
            {seccion.name}
          </h2>
          {isExpanded && (
            <div className="flex flex-col justify-center items-center">
              <h2 style={{ textAlign: 'center', margin: '0'}}>
                {seccion.description}
              </h2>
              <img src={seccion.image} alt="Imagen de seccion"/>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => onSeccionClick()}
              >
                Seleccionar Seccion
              </button>
            </div>
          )}
      </div>
  );
};

export default SeccionCard
