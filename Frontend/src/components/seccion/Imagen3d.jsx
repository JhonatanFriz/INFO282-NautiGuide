import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clientAxios from '../config/clienteAxios';

import {
  ReactPhotoSphereViewer,
  MarkersPlugin,
  CompassPlugin
} from "react-photo-sphere-viewer";


function Imagen3d(){

    const pSRef = React.createRef();
    const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

    const plugins = [
        [CompassPlugin, {
          hotspots: [
            { longitude: '0deg' },
            { longitude: '90deg' },
            { longitude: '180deg' },
            { longitude: '270deg' },
          ],
        }],
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

    return (
        <div className="App flex justify-center">
            <ReactPhotoSphereViewer
                ref={pSRef}
                src= {baseUrl + 'sphere.jpg'}
                plugins={plugins}
                height={"80vh"}
                width={"100%"}
                littlePlanet={false}
            ></ReactPhotoSphereViewer>
        </div>
    );
}

export default Imagen3d