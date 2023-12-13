
const FullSolicitudCard = ({solicitud,usuarios}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">

            <strong>Titulo:</strong> {solicitud.title}<br /> <br />
            <strong>Descripción:</strong> {solicitud.description}<br /> <br />
            <strong>Fecha:</strong> {solicitud.date}<br /> <br />
            <strong>Remitente:</strong> 

            {usuarios.map((usuario) => (

                usuario.id === solicitud.userId ? usuario.name : null 
                
            ))}
            <br />
        </div>
    )
}

export  default FullSolicitudCard