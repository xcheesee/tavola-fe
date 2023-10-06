
export default function StatusBadge({status}: {status: string}) {
    switch (status) {
    case 'Recebido':
        return <div className="badge badge-error badge-lg">Recebido</div>
    
    case 'Em Andamento':
        return <div className="badge badge-warning badge-lg">Em Andamento</div>
    
    case 'Enviado':
        return <div className="badge badge-success badge-lg">Enviado</div>
    default:
        return <></>
    }

}