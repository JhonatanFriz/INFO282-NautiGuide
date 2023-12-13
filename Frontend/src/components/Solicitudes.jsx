import React from 'react';
import { useNavigate } from "react-router-dom";
// import BotonesSolicitudes from './solicitudes/BotonesSolicitudes';

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

const roles = localStorage.getItem(' ');

const [tipoUsuario, setTipoUsuario] = useState(null);


    useEffect(() => {
      // Aquí puedes poner la lógica de tu if para determinar si es un USUARIO o ADMIN
      const textoUsuario = roles; // Reemplaza esto con tu lógica real
  
      // Configurar el tipo de usuario
      if (textoUsuario === "ADMIN") {
        setTipoUsuario("ADMIN");
      } else if (textoUsuario === "USUARIO") {
        setTipoUsuario("USUARIO");
      } else {
        // En caso de otro tipo de usuario, puedes manejarlo según tus necesidades
        setTipoUsuario(null);
      }
    }, []); // La dependencia vacía significa que esto solo se ejecuta al montar el componente
  
    console.log(roles)
return(
    <div>
      {tipoUsuario === "ADMIN" && (
        <button onClick={handleNavigateRevisar}>
          Botón para Administrador
        </button>
      )}
      {tipoUsuario === "USUARIO" && (
        <button onClick={handleNavigateCrear}>
          Botón para Usuario
        </button>
      )}
      {tipoUsuario === null && (
        <p>Usuario no reconocido o sin tipo definido</p>
        
      )}
    </div>
      
   );
    }
    
 export default Solicitudes ;