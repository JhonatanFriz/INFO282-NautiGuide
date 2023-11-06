import React, { useState } from 'react';

const datos = [
  { id: 1, nombre: 'Motor' },
  { id: 2, nombre: 'Vela' },
  { id: 3, nombre: 'Sistema De Ventilacion' },
  { id: 4, nombre: 'Sistema De Movimiento' },
  { id: 5, nombre: 'Sistema Electrico' },
  { id: 6, nombre: 'Valvulas' },
  { id: 7, nombre: 'Timon' },
  { id: 8, nombre: 'Sistema De Redes' },
];

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  
  const resultadosFiltrados = datos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className='bg-white'>
    <div className='flex justify-center'>
      <l1>Buscador:</l1>
      <input
        className='bg-blue-200 w-2/3 h-6'
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="🔍︎ Escriba aqui ..."
      /> 
    </div>
      {busqueda && resultadosFiltrados.length > 0 ? (
        <ul>
          {resultadosFiltrados.map((fruta) => (
            <li key={fruta.id}>{fruta.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>Rellene el campo de arriba.</p>
      )}
    </div>

  );
}

export default Buscador;