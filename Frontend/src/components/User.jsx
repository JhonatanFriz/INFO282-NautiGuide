import React, { useState } from 'react';
import FormularioUser from './user/FormularioUser.jsx';

const User = () => {
  const handleRegistro = (nuevoUsuario) => {
    const [usuarios, setUsuarios] = useState([]);
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  return (
    <div className="bg-gradient-to-b from-sky-800 from-5% to-sky-200 to-95% flex h-screen justify-center items-center">
      <FormularioUser  onRegistro={handleRegistro} />
    </div>
  );
}

export default User