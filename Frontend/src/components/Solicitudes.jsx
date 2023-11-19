import React from 'react';


const Solicitudes = () => {


return(
 <div className='flex h-screen bg-black ' >
   <div className='flex justify-start w-20 h-10 py-0 '>
    <button type="submit" className="bg-sky-400 text-white px-12 rounded mr-96"
          >Crear.Solicitud  
    </button>

    <button type="submit" className="bg-red-400 text-white px-12 rounded"
          >Revisar.Solicitudes  
    </button>
    
 </div>
 </div>
   );
    }
    
 export default Solicitudes ;