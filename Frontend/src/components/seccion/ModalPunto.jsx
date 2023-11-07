import React, { useState } from 'react';

const ModalPunto = ({ isOpen, punto, onClose, handleConfirm, secciones }) => {
  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    handleConfirm(event.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <div className="modal-content">
          <h2>Punto Seleccionado</h2>
          <p>Coordenadas: ({punto.x}, {punto.y})</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="secciones">Selecciona una sección:</label>
            <select
              id="secciones"
              name="secciones"
              onChange={handleChange}
              style={{
                fontSize: '1.2rem',
                padding: '0.5rem',
                border: '1px solid #000', // Agrega un borde
                borderRadius: '5px', // Redondea las esquinas
              }}
            >
              {secciones.map((seccion) => (
                <option key={seccion.id} value={seccion.id}>
                  {seccion.name}
                </option>
              ))}
            </select>
            <div style={{ marginTop: '1rem' }}>
              <button onClick={handleConfirm}>Confirmar</button>
              <span style={{ margin: '0 8px' }}></span>
              <button onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPunto;

// Holaa
// import React, { useState } from 'react';

// const ModalPunto = ({ isOpen, punto, onClose, handleConfirm, secciones }) => {
//   if (!isOpen) {
//     return null;
//   }

//   const handleChange = (event) => {
//     handleConfirm(event.target.value);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <h2>Punto Seleccionado</h2>
//           <p>Coordenadas: ({punto.x}, {punto.y})</p>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <label htmlFor="secciones">Selecciona una sección:</label>
//             <select
//               id="secciones"
//               name="secciones"
//               onChange={handleChange}
//               style={{ fontSize: '1.2rem', padding: '0.5rem' }}
//             >
//               {secciones.map((seccion) => (
//                 <option key={seccion.id} value={seccion.id}>
//                   {seccion.name}
//                 </option>
//               ))}
//             </select>
//             <div style={{ marginTop: '1rem' }}>
//               <button onClick={handleConfirm}>Confirmar</button>
//               <span style={{ margin: '0 8px' }}></span>
//               <button onClick={onClose}>Cerrar</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalPunto;