'use client'
import { ShowPedidoModal } from "@/components/modals"
import PedidoTable from "@/components/pedidoTable"
import { PedidoApiData } from "@/utils/types"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export default function UserOrders() {
    const modalId = "cliente-pedido-modal"

    const [pedidoId, setPedidoId] = useState<number|null>(null)
    const [emAndamento, setEmAndamento] = useState<PedidoApiData[]|null>(null)

    const pedidos = useQuery({
        queryKey: ['pedidos'],
        queryFn: async () => {
            const res = await fetch('/api/pedidos')
            if (!res.ok) {
                throw Error('mani')
            }
            return await res.json()
        },
        onSuccess: (res) => {
            const filtered = res.filter((pedido: PedidoApiData) => pedido.status !== 'Enviado') 
            setEmAndamento(filtered)
            console.log(filtered)
        }
    })

    function onClickView(arg:number | null) {
        setPedidoId(arg)
        const pedidoModal = document.getElementById(modalId) as HTMLDialogElement
        pedidoModal.show()
    } 
    return(
        <div className="w-full py-8">
            {pedidos.isLoading
                ?<></>
                :<PedidoTable pedidos={pedidos?.data} onClickView={onClickView}/>
            }
            <ShowPedidoModal modalId={modalId} pedidoId={pedidoId} />
        </div>
    )
}