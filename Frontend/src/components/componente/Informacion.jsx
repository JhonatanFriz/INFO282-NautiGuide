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
        <div className="bg-gray-200 p-2 flex flex-col justify-center items-center space-y-2">
            
            {show && (
                <>
                    <h2 className="text-xl font-semibold mb-2" style={{ textAlign: 'center', margin: '0' }}>
                        {nombre}
                    </h2>
                    <img
                        src={imagen}
                        alt="Imagen"
                        style={{ width: '50%', height: 'auto' }}
                    />
                    <h2 style={{ textAlign: 'center', margin: '0' }}>
                        {description}
                    </h2>
                </>
            )}
        </div>
    );
}
export default informacion