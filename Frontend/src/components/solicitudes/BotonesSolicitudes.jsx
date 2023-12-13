import React from 'react';
// import { useAuth } from '../AuthContext';

const BotonesSolicitudes = ({onClickSeleccion,onClickSeleccion2}) => {
      const userRole = localStorage.getItem('userRole');
      return(
            <div className=' flex justify-around mt-10' >
            
            <button type="submit" 
                        className="bg-gradient-to-b from-sky-600 from-5% to-sky-400 to-95% text-white py-4 px-12 rounded "
                        onClick={onClickSeleccion}
                  >Crear Solicitud  
            </button>

            
            <button type="submit" className="bg-gradient-to-b from-green-600 from-5% to-green-400 to-95% text-white py-4 px-12 rounded"
                  onClick={onClickSeleccion2}
                  >Revisar Solicitudes  
            </button>
            
            </div>
            );


}

export default BotonesSolicitudes ;