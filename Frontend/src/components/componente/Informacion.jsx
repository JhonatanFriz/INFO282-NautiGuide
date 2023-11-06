import React, { useState } from 'react';

const informacion = ({componente, show}) => {

    if (show){
        const nombre = componente.name
        const description = componente.description
        const imagen = componente.image
    }

    return(
        <div className="bg-gray-200 flex justify-center items-center">
            {show ? (
                <h2
                    style={{ textAlign: 'center', margin: '0'}}
                >{nombre}</h2>
            ):(<p></p>)}
            {show ? (
                <img src={imagen} alt="Imagen" />
            ):(<p></p>)}
            {show ? (
                <h2
                    style={{ textAlign: 'center', margin: '0'}}
                >{description}</h2>
            ):(<p></p>)}
        </div>
    );
}
export default informacion