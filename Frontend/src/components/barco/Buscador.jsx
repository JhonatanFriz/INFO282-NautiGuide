import React, { useState } from 'react';

const datos = [
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Banana' },
  { id: 3, nombre: 'Cereza' },
  { id: 4, nombre: 'Damasco' },
  { id: 5, nombre: 'Kiwi' },
  { id: 6, nombre: 'Naranja' },
  { id: 7, nombre: 'Pera' },
  { id: 8, nombre: 'Uva' },
];

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  
  const resultadosFiltrados = datos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className='bg-slate-400'>
    <div>
      <h1>Buscador de Frutas</h1>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar fruta..."
      />

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
    </div>
  );
}

export default Buscador;