import React, { useState, useEffect } from 'react';

const informacion = ({componente, show}) => {

    const [nombre, setNombre] = useState(null);
    const [description, setDescription] = useState(null);
    const [imagen, setImagen] = useState(null);

    useEffect(() => {
        if (show) {
            setNombre(componente.name);
            setDescription(componente.description);
            setImagen(componente.image);
        }
    }, [show, componente]);
    
    return(
        <div className="bg-gray-200 flex flex-col justify-center items-center">
            
            {show && (
                <>
                    <h2 className="text-xl font-semibold mb-2" style={{ textAlign: 'center', margin: '0' }}>
                        {nombre}
                    </h2>
                    <img src={imagen} alt="Imagen" />
                    <h2 style={{ textAlign: 'center', margin: '0' }}>
                        {description}
                    </h2>
                </>
            )}
        </div>
    );
}
export default informacion