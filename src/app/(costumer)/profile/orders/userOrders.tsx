'use client'
import { AttPedidoModal, ShowPedidoModal } from "@/components/modals"
import PedidoTable from "@/components/pedidoTable"
import { toastAtom } from "@/utils/atomStore"
import { PedidoApiData } from "@/utils/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useSetAtom } from "jotai"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

export default function UserOrders() {
    const modalId = "cliente-pedido-modal"
    const attModalId = "cliente-confirm-modal"
    const socket = io("ws://localhost:8000")
    const queryClient = useQueryClient()

    const [pedidoId, setPedidoId] = useState<number|null>(null)
    const [emAndamento, setEmAndamento] = useState<PedidoApiData[]|null>(null)
    const [signal, setSignal] = useState<boolean>(false)

    const setToast = useSetAtom(toastAtom)

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
            return filtered
        }
    })

    socket.on('alterarStatus', () => {
        setSignal(prev => !prev)
    })

    useEffect(() => {
        queryClient.invalidateQueries(['pedidos'])
    }, [signal])

    function onClickView(arg:number | null) {
        setPedidoId(arg)
        const pedidoModal = document.getElementById(modalId) as HTMLDialogElement
        pedidoModal.show()
    } 

    function onClickAtt(arg:number | null) {
        setPedidoId(arg)
        const attPedidoModal = document.getElementById(attModalId) as HTMLDialogElement
        attPedidoModal.show()
    }

    async function confirmaRecebimento(e: Event) {
        e.preventDefault()
        const res = await fetch(`/api/pedidos/${pedidoId}`, {
            method: "PATCH",
            body: JSON.stringify({flag: 'client'})
        })
        const modal = document.getElementById(attModalId) as HTMLDialogElement
        if(res.ok) {
            setToast(prev => ({...prev, open: true, message: "Status Atualizado."}))
            queryClient.invalidateQueries()
            socket.emit('cozinhaStatus')
            modal.close()
        }
    }
    return(
        <div className="w-full py-8 flex justify-center">
            {pedidos.isLoading
                ?<></>
                :<div className="w-3/4 ">  
                    <PedidoTable pedidos={emAndamento} onClickView={onClickView} onClickAtt={onClickAtt}/>
                </div>
            }
            <ShowPedidoModal modalId={modalId} pedidoId={pedidoId} />
            <AttPedidoModal 
                modalId={attModalId} 
                pedidoId={pedidoId} 
                onClickEnviar={confirmaRecebimento} 
                text={"Deseja Confirmar o Recebimento do Pedido?"}
            />
        </div>
    )
}