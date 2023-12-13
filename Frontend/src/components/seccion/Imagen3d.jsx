
import React, { useState, useEffect, useRef } from "react";
import { ReactPhotoSphereViewer, MarkersPlugin, LensflarePlugin } from "react-photo-sphere-viewer";

function Imagen3d({ urlImagen }){

  const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
  const baseUrl2 = 'https://files.readme.io/3f767b4-b620bea-Spherical-2000X1000.jpg';

  const photoSphereRef = React.useRef();

  const handleClick = (instance) => {
    photoSphereRef.current.animate({
      yaw: 0,
      pitch: 0,
      zoom: 55,
      speed: '10rpm',
    });
  }

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs)
      return;
    console.log(markersPlugs);
    markersPlugs.addEventListener("select-marker", () => {
      console.log("asd");
    });
  }

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: "image",
            position: { pitch: 0.11, yaw: -0.35 },
            image: "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-blue.png",
            anchor: "bottom center",
            size: { width: 32, height: 32 },
            tooltip: "Mountain peak. <b>Click me!</b>"
          },
          {
            // image marker rendered in the 3D scene
            id: "imageLayer",
            image: "https://cdn.discordapp.com/attachments/1044401213355069461/1183615662564843601/drone.png?ex=6588fafc&is=657685fc&hm=0f5a7fb0b825543b77eb3f78a8ed22af006b0b15737887e43fcb5ee70eee633a&",
            size: { width: 220, height: 220 },
            position: { yaw: '13.5deg', pitch: '-0.1deg' },
            tooltip: "Image embedded in the scene"
          }
        ]
      }
    ],
  ];
  return (
    <div className="App basis-2/3 flex justify-center p-2">
        <ReactPhotoSphereViewer
          ref={photoSphereRef}
          src= {urlImagen}
          height={"65vh"}
          width={"90%"}
          onClick={handleClick}
          onReady={handleReady}
          plugins={plugins}
        />
    </div>
  );
}

export default Imagen3d