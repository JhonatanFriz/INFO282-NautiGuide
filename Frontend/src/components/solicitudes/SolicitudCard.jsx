const SolicitudCard = ({solicitud}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <strong>Titulo:</strong> {solicitud.title}<br />
            <strong>Fecha:</strong> {solicitud.date}<br />
        </div>
    )
}

export  default SolicitudCard