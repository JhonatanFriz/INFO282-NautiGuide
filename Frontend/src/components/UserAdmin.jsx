import React, { useState } from 'react';
import Formulario from './user/Formulario';
import ListaUsuarios from './user/ListaUsuario';

const UserAdmin = () => {
  const handleRegistro = (nuevoUsuario) => {
    const [usuarios, setUsuarios] = useState([]);
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div className="bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% flex h-screen justify-center items-center">
      <Formulario  onRegistro={handleRegistro} />
      <ListaUsuarios  />
    </div>
  );
}

export default UserAdmin