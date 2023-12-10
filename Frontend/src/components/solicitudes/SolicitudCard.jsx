const SolicitudCard = ({solicitud,handleclick,usuarios}) => {

    return (
        <div className="bg-white p-4 rounded shadow-md mb-4" style={{cursor:"pointer"}} onClick={() => handleclick(solicitud)}>
            <strong>Titulo:</strong> {solicitud.title}<br />
            <strong>Fecha:</strong> {solicitud.date}<br />
            <strong>Remitente:</strong> 

            {usuarios.map((usuario) => (

                usuario.id === solicitud.userId ? usuario.name : null 
                
            ))}
            <br />
        </div>
    )
}

export  default SolicitudCard