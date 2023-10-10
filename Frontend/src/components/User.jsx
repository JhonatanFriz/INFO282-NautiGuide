import React, { useState } from 'react';
import Formulario from './user/Formulario';
import ListaUsuarios from './user/ListaUsuario';

const User = () => {
  const handleRegistro = (nuevoUsuario) => {
    const [usuarios, setUsuarios] = useState([]);
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div className="flex h-screen">
      <Formulario  onRegistro={handleRegistro} />
      <ListaUsuarios  />
    </div>
  );
}

export default User