import React, { useState } from 'react';

const SeccionCard = ({ seccion,onToggleSelect, isSelected }) => {

  return(
    <div
      className={`p-2 rounded shadow-md mb-2 grow mr-2
      ${
        isSelected ? 'bg-blue-300' : 'bg-white'
      }`}
      style={{cursor: 'pointer'}}
      onClick={() => onToggleSelect()}
    >
      <h2 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>
        {seccion.name}
      </h2>
    </div>
  );
};

export default SeccionCard
