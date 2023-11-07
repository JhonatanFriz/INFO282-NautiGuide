import React, { useState } from 'react';

const imagen = ( { imagenBarco,handleImageClick,show } ) => {

  return (
    <div className="bg-gray-200 flex flex-col p-4 h-screen">
      {show ? (
        <img
          src={imagenBarco}
          alt="Modelo"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          src={imagenBarco}
          alt="Modelo"
        />
      )}
    </div>
  );
};

export default imagen

// import React, { useState } from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal-dialog">
//         <div className="modal-content flex flex-cols gap-4">
//           <div className="basis-2/3">
//           {children}
//           </div>
//           <div className="place-content-end">
//           <button onClick={onClose}>Cerrar</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const imagen = ( { imagenBarco,handleImageClick,show } ) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-gray-200 flex flex-col p-4 h-screen">
//       {show ? (
//         <img
//           src={imagenBarco}
//           alt="Modelo"
//           // onClick={handleImageClick}
//           onClick={openModal}
//           style={{ cursor: 'pointer' }}
//         />
//       ) : (
//         <img
//           src={imagenBarco}
//           alt="Modelo"
//         />
//       )}
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2>Contenido del Modal</h2>
//         <p>¡Hola! Esto es un modal.</p>
//       </Modal>
//     </div>
//   );
// };

// export default imagen