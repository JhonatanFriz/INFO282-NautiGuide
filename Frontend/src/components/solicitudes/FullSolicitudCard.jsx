
const FullSolicitudCard = ({solicitud,usuarios}) => {

  
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">

            <strong>Titulo:</strong> {solicitud.title}<br />
            <strong>Descripción:</strong> {solicitud.description}<br />
            <strong>Fecha:</strong> {solicitud.date}<br />
            <strong>Usuario:</strong> 
            {solicitud.userId}
            {usuarios.map((usuario) => (

                usuario.id === solicitud.userId ? usuario.name : null 
                
            ))}
            <br />
        </div>
    )
}

export  default FullSolicitudCard