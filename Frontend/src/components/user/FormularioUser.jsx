import React, { useState, useEffect } from 'react';
import clientAxios from '../config/clienteAxios';
import { useNavigate } from 'react-router-dom';
// ------------------------------------------------------
const FormularioUser = ({ onRegistro }) => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    // const [rol, setRol] = useState('');
    const [error, setError] = useState(''); // Estado para el mensaje de error
    const [mensajeExito, setMensajeExito] = useState('');
    const [mostrarExito, setMostrarExito] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await clientAxios.get('/users');
          setUsuarios(res.data.data)
        };
        fetchPosts();
      }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
    if (!(nombre && email && contraseña)) { // Verifica si el campo de rol está vacío
      setError('Por Favor ingrese todos los datos'); // Establece un mensaje de error
      return;
    }

    try {
        if (usuarios.length > 0){
            const { data } = await clientAxios.post(`/users`, {
                name: nombre,
                mail: email,
                password: contraseña,
                // rol: rol,
                rol : 'USUARIO',
            });
            setMensajeExito('Cuenta creada exitosamente.');
            setMostrarExito(true);
            onRegistro(data);
        } else {
            const { data } = await clientAxios.post(`/users`, {
                name: nombre,
                mail: email,
                password: contraseña,
                rol : 'ADMIN',
            });
            setMensajeExito('Cuenta creada exitosamente.');
            setMostrarExito(true);
            onRegistro(data);
        }
    //    
    } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.error.includes('correo')) {
            setError('El correo electrónico ya está registrado.');
          } else {
            console.log(error); 
          }
    }
    navigate('/auth');
    // window.location.reload();
  };


  useEffect(() => {
    // Utilizando un efecto para limpiar el mensaje de éxito después de 2 segundos
    const timeout = setTimeout(() => {
      setMensajeExito('');
      setMostrarExito(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [mostrarExito]);
  return (
    <div className="bg-white w-1/3 h-3/4 p-4 shadow-md border-8 mr-4 flex flex-col justify-center items-center">
      <div className= "w-full">
        <h2 className="text-xl font-semibold mb-4">FormularioUser de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contraseña" className="block font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="rol" className="block font-medium mb-1">
              Rol
            </label>
            <select
              id="rol"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="USUARIO">USUARIO</option>
            </select>
          </div> */}
          {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si existe */}
          {mensajeExito && <p className="text-green-500">{mensajeExito}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioUser;
