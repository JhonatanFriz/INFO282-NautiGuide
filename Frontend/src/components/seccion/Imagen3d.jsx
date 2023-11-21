import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import {
  ReactPhotoSphereViewer,
  MarkersPlugin
} from "react-photo-sphere-viewer";


function Imagen3d(){

    
    const pSRef = React.createRef();
    const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

    return (
        <div className="App">
        <ReactPhotoSphereViewer
            ref={pSRef}
            src= {baseUrl + 'sphere.jpg'}
            height={"100vh"}
            width={"100%"}
            littlePlanet={false}
        ></ReactPhotoSphereViewer>
        </div>
    );

    // const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
    // const viewerRef = React.createRef();

    // useEffect(() => {
    //     const viewer = new Viewer({
    //         container: 'viewer',
    //         panorama: baseUrl + 'sphere.jpg',
    //         caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
    //         loadingImg: baseUrl + 'loader.gif',
    //         touchmoveTwoFingers: true,
    //         navbar: [],
    //         panel : false, 
    //         mousewheelCtrlKey: false,
    //     });

    //     return () => {
    //         // Realiza cualquier limpieza necesaria al desmontar el componente
    //         viewer.destroy();
    //     };       
    // }, []);

/*
    const sphereElementRef = React.createRef();

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg",
    });

    // unmount component instructions
    return () => {
      shperePlayerInstance.destroy();
    };
  }, []); // will only be called when the src prop gets updated


*/
}
export default Imagen3d