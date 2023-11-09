const UsuarioCard = ({usuario}) => {
    return (
        <div className="bg-white p-2 rounded shadow-md mb-4 grow overflow-auto mr-2">
            <strong>Nombre:</strong> {usuario.name}<br />
            <strong>Correo:</strong> {usuario.mail}<br />
            <strong>Rol:</strong> {usuario.rol}<br />
        </div>
    )
}

export  default UsuarioCard