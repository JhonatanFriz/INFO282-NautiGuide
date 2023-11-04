import React, { useState } from 'react';

function MiComponente() {
  const [busqueda, setBusqueda] = useState('');

  // Resto del código del componente
}

<input
  type="text"
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Buscar..."
/>

const resultadosFiltrados = tusDatos.filter((item) =>
  item.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

// Muestra los resultados en tu componente