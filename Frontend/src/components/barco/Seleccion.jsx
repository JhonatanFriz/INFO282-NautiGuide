import React from 'react';

function Seleccion({ imagenSeleccionada, show}){
  return(
  <div className="bg-gray-200 flex justify-center items-center">
    {show ? (
  <button
    type="submit"
    src={imagenSeleccionada}
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  >
  Seleccionar Barco
  </button>
    ):(<p></p>)}
</div>
);
} 
export default Seleccion;








// function Popup({ onClose }) {
//   return (
//     <div className="popup">
//       <div className="popup-content">
//       <div className="w-1/2 flex justify-center items-center bg-sky-800">
//         <div className="p-4 bg-white rounded-md border-8 w-1/3">
//         </div>
//     </div>
//         {/* <h2>Contenido de la ventana emergente</h2>
//         <p>Este es el contenido de la ventana emergente.</p> */}
//         <button onClick={onClose}>Cerrar</button>
//       </div>
//     </div>
//   );
// }

// export default Popup;
