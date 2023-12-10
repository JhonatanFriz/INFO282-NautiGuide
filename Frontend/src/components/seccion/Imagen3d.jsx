
import React, { useState, useEffect, createRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import {
  ReactPhotoSphereViewer,
  MarkersPlugin,
  CompassPlugin
} from "react-photo-sphere-viewer";


function Imagen3d({ seccionId,expandedCard }){

  const [imagen,setImagen] = useState(null);
  const [urlImagen,setUrlImagen] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Changing image to:", urlImagen);
    const fetchPosts = async () => {
      try{
        const res = await clientAxios.get(`/imagen3d/${seccionId}`);
        const imageUrl = res.data.data.image.replace(/"/g, '');
        setUrlImagen(imageUrl);
      } catch (error){
        console.error("Error al obtener la imagen:", error);
        setError(error);
      }
    };
    fetchPosts();
  }, [seccionId]);


  const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg';
  const baseUrl2 = 'https://files.readme.io/3f767b4-b620bea-Spherical-2000X1000.jpg';


  const plugins = [
    [CompassPlugin],
    [MarkersPlugin, {
      markers: [
        {
          id: 'polygon',
          polygonPx: [2941, 1413, 3042, 1402, 3222, 1419, 3433, 1463, 3480, 1505, 3438, 1538, 3241, 1543, 3041, 1555, 2854, 1559, 2739, 1516, 2775, 1469, 2941, 1413 ],
          svgStyle : {
            fill       : 'rgba(255,0,0,0.2)',
            stroke     : 'rgba(255, 0, 50, 0.8)',
            strokeWidth: '2px',
          },
          data: { compass: 'rgba(255, 0, 50, 0.8)' },
        },
        {
          id: 'polyline',
          polylinePx: [2478, 1635, 2184, 1747, 1674, 1953, 1166, 1852, 709, 1669, 301, 1519, 94, 1399, 34, 1356],
          svgStyle: {
            stroke        : 'rgba(80, 150, 50, 0.8)',
            strokeLinecap : 'round',
            strokeLinejoin: 'round',
            strokeWidth   : '20px',
          },
          data: { compass: 'rgba(80, 150, 50, 0.8)' },
        },
      ],
    }],
  ]

  const panoRef = React.createRef();


  // // /*  
  // const [isPanoOpen, setisPanoOpen] = useState(false);
  // const panoRef = React.createRef();

  // useEffect(() => {
  //   if (expandedCard == null){
  //     setisPanoOpen(false);
  //     return;
  //   }
  //   if (urlImagen === null){
  //     setisPanoOpen(false);
  //     return;
  //   }
  //   console.log("CHANGED LOCATION");
  //   console.log(panoRef);
  //   if (panoRef.current) {
  //     panoRef.current.setPanorama(urlImagen, {
  //       transition: "fade-only",
  //       speed: "20rpm",
  //       position: { yaw: 0, pitch: 0 },
  //     });
  //     setisPanoOpen(true);
  //   } else {
  //     console.error("panoRef.current es null");
  //   }
  // }, [urlImagen]);
  // */

  return (
      <div className="App flex justify-center p-10">
        {urlImagen != null && (
          <ReactPhotoSphereViewer
            ref={panoRef}
            src={urlImagen}
            container={""}
            littlePlanet={false}
            plugins={plugins}
            height={"80vh"}
            width={"100%"}
          ></ReactPhotoSphereViewer>
        )}
        {/* { (urlImagen != null) && (
          <>
          <ReactPhotoSphereViewer
            ref={panoRef}
            src= {urlImagen}
            container={""}
            littlePlanet={false}
            plugins={plugins}
            height={"80vh"}
            width={"100%"}
          ></ReactPhotoSphereViewer>
          </>)} */}
          
      </div>
  );
}

export default Imagen3d