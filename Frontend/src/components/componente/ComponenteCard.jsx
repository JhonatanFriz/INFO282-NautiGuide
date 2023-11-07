import React, { useState } from 'react';

const ComponenteCard = ({ comp, onComponenteClick }) => {
    const cardStyle = {
        cursor: 'pointer', 
    };

    return(
        <div 
            className="bg-white p-2 rounded shadow-md mb-2 grow mr-2"
            style={cardStyle}
            onClick={() => onComponenteClick(comp)}
        >
            <h2 style={{
                textAlign: 'center',
                margin: '0',
                fontWeight: 'bold'
            }}>{comp.name}</h2>
            
        </div>
    )
}
export default ComponenteCard