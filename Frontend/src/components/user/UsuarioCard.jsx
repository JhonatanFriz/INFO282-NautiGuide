const UsuarioCard = ({usuario}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4 overflow-auto">
            <strong>Nombre:</strong> {usuario.name}<br />
            <strong>Email:</strong> {usuario.mail}<br />
            <strong>Contraseña:</strong> {usuario.password}<br />
            <strong>Rol:</strong> {usuario.rol}<br />
        </div>
    )
}

export  default UsuarioCard