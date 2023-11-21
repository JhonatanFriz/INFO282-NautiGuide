import React from 'react';
import { useNavigate } from "react-router-dom";
import BotonesSolicitudes from './solicitudes/BotonesSolicitudes';
//la seccion a ver sera vista dependiendo si es un usuario o un administrador
//lo que hara de este apartado solo una transicion para crear solicitud o revisar solicitud

const Solicitudes = () => {
      
      const navigateTo = useNavigate();
      const handleNavigateCrear = () => {
            navigateTo(`/crear_solicitud`);
            };
      const handleNavigateRevisar = () => {
      navigateTo(`/revisar_solicitudes`);
      };


return(
 <div className='bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% h-screen  ' >
      <BotonesSolicitudes
      onClickSeleccion={handleNavigateCrear}
      onClickSeleccion2={handleNavigateRevisar}
      />

 </div>
   );
    }
    
 export default Solicitudes ;