import React from 'react';
import { socialMedia } from "../constants";
import { BG1 } from '../constants';
import { BG2 } from '../constants';
import { BG3 } from '../constants';
const Home = () => {
  
  /*const BG = "url('C:\Users\Yoan\Desktop\Taller IS\plantilla_INFO282\Frontend\src\assets\astillero01.png')";*/

  // const containerStyle = {
  //   backgroundImage: BG.image,
  //   backgroundPosition: 'left', // Alinea la imagen al lado izquierdo
  //   backgroundSize: '50%', // Controla el tamaño de la imagen de fondo
  //   // Otros estilos para el contenedor, si es necesario
  
  // };

  const containerStyle = {
    position: "sticky",
    width: "100vw", // Ancho igual al 100% del viewport width
    height: "100vh", // Altura igual al 100% del viewport height
    overflow: "hidden", // Evita que el contenido se desborde
  };

  const containerStyle2 = {
      position: "relative",
      width: "100vw", // Ancho igual al 100% del viewport width
      height: "100vh", // Altura igual al 100% del viewport height
      overflow: "hidden", // Evita que el contenido se desborde
      background: `url(${BG2.image}) right center no-repeat`, // Fija la imagen a la derecha
      backgroundSize: "cover", // Escala la imagen para cubrir todo el contenedor
    };

  const textOverlayStyle = {
    position: "absolute",
    top: "50%", // Ajusta la posición vertical del texto
    left: "50%", // Ajusta la posición horizontal del texto
    transform: "translate(-50%, -50%)", // Centra el texto en el medio
    color: "white", // Cambia el color del texto
    fontSize: "24px", // Cambia el tamaño de fuente del texto
    // Otros estilos para el texto, si es necesario
  };

  const imageStyle = {
    width: "100%", // Ancho igual al 100% del contenedor
    height: "100%", // Altura igual al 100% del contenedor
    // objectFit: "cover", // Escalar y recortar la imagen para que llene el contenedor
  };
  
 return (



    <div className="flex h-screen" style={containerStyle}>
      <img src={BG1.image} alt={BG1.alt} style={imageStyle} className="flex min-h-screen min-w-screen" />
      {/* <img src={BG3.image} alt={BG3.alt} style={imageStyle}  />  */}
      
{/* 
    <div className=" h-screen" style={containerStyle2}>    </div> */}
      {/* <img src={BG2.image} alt={BG2.alt} style={{imageStyle,}}  /> */}

    
  {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
       <div style={textOverlayStyle}>
        
         <section className="sm:py-16 py-6 flex justify-center items-center flex-col relative flex-grow">
      
     <div className="h-screen flex flex-col justify-center items-center">
       <section className="sm:py-16 py-6 flex justify-center items-center flex-col relative flex-grow">
         {/* Eliminamos el fondo azul */}
        
         <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] text-center">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-red-500 xs:leading-[76.8px] leading-[66.8px] w-full">
                Página Princial
           </h2>
        </div>
        
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
         {socialMedia.map((media) =>
            <div key={media.name} className="px-10">
              <a href={media.link}>
                <img src={media.icon} className="h-[90px]" alt={media.name} />
              </a>
              <h2 className="font-poppins text-white py-4 text-center">{media.name}</h2>
            </div>
          )}
           </div>
         </section>
       </div>
     </section>
      </div>
    </div>


  );
};


export default Home;
//    <div className="flex h-screen flex justify-center items-center" style={containerStyle}>