const UsuarioCard = ({usuario}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <strong>Nombre:</strong> {usuario.name}<br />
            <strong>RUT:</strong> {usuario.rut}<br />
            <strong>Email:</strong> {usuario.mail}<br />
            <strong>Contraseña:</strong> {usuario.password}<br />
        </div>
    )
}

export  default UsuarioCard