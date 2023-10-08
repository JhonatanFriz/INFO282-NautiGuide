import React from 'react';

function Rbarco({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
      <div className="w-1/2 flex justify-center items-center bg-sky-800">
        <div className="p-4 bg-white rounded-md border-8 w-1/3">
        </div>
    </div>
        {/* <h2>Contenido de la ventana emergente</h2>
        <p>Este es el contenido de la ventana emergente.</p> */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Rbarco;
