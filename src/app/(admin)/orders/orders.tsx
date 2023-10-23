'use client'

import Tab from "@/components/tab"
import TabContent from "@/components/tabContent"
import { useEffect, useState } from "react"
import FiltroDropdown from "@/components/filtroDropdown"
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllPedidos } from "@/utils/api/pedidos"
import PedidoTable from "@/components/pedidoTable"
import { AttPedidoModal, ShowPedidoModal } from "@/components/modals"
import { io } from "socket.io-client"
import AutohideToast from "@/components/autohideToast"
import { useSetAtom } from "jotai"
import { toastAtom } from "@/utils/atomStore"

export default function Orders() {
    const queryClient = useQueryClient()
    const setToast = useSetAtom(toastAtom)

    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [pedidoId, setPedidoId] = useState<number | null>(null)
    const [signal, setSignal] = useState(false)

    const pedidoModalId = 'pedido-modal'
    const attModalId = 'att-pedido-modal'

    const socket = io("ws://localhost:8000")

    async function patchStatus (e: Event) {
        e.preventDefault()
        const res = await fetch(`/api/pedidos/${pedidoId}`, {
            method: "PATCH",
            body: JSON.stringify({flag: 'admin'})
        })
        const modal = document.getElementById(attModalId) as HTMLDialogElement
        if(res.ok) {
            setToast(prev => ({...prev, open: true, message: "Status Atualizado."}))
            queryClient.invalidateQueries()
            socket.emit('cozinhaStatus')
            modal.close()
        }
    }

    function onClickView(id: number | null) {
        setPedidoId(id)
        const pedidoModal = document.getElementById(pedidoModalId) as HTMLDialogElement
        pedidoModal.show()
    }

    function onClickAtt(id: number | null) {
        setPedidoId(id)
        const pedidoModal = document.getElementById(attModalId) as HTMLDialogElement
        pedidoModal.show()
    }

    const pedidos = useQuery({
        queryFn: () => getAllPedidos(),
        queryKey: ['pedidos'],
    })

    useEffect(() => {
        queryClient.invalidateQueries(['pedidos'])
    }, [signal])

    const pedidosAberto = pedidos?.data?.filter((pedido: any) => pedido.status !== 'Enviado') ?? []

    socket.on('cozinhaPedido', () => {
        setSignal(prev => !prev)
    })
    socket.on('confStatus', () => {
        setSignal(prev => !prev)
    })

    return (
        <div className="grid px-2">
            <div className="tabs w-full flex">
                <Tab 
                    onClick={() => setActiveTab(0)}
                    tabId={0}
                    activeTab={activeTab}
                >
                    Vendas
                </Tab>

                <Tab 
                    onClick={() => setActiveTab(1)}
                    tabId={1}
                    activeTab={activeTab}
                >
                    Pedidos em Aberto
                </Tab>
            </div>

            <TabContent tabId={0} activeTab={activeTab} className="grid">
                <FiltroDropdown isCollapsed={isDropdownOpen} onClick={() => setIsDropdownOpen(prev => !prev)}>
                    <input type="text" placeholder="Nome" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Categoria" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Faixa de Preco" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Em Estoque" className="input input-bordered w-full" /> 
                </FiltroDropdown>
                
                <PedidoTable pedidos={pedidos?.data} onClickView={onClickView} onClickAtt={onClickAtt} admin />
            </TabContent>

            <TabContent tabId={1} activeTab={activeTab}>
                <FiltroDropdown isCollapsed={isDropdownOpen} onClick={() => setIsDropdownOpen(prev => !prev)}>
                    <input type="text" placeholder="Nome" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Categoria" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Faixa de Preco" className="input input-bordered w-full" /> 
                    <input type="text" placeholder="Em Estoque" className="input input-bordered w-full" /> 
                </FiltroDropdown>

                <PedidoTable pedidos={pedidosAberto} onClickView={onClickView} onClickAtt={onClickAtt} admin />
            </TabContent>

            <ShowPedidoModal modalId={pedidoModalId} pedidoId={pedidoId} />
            <AttPedidoModal modalId={attModalId} pedidoId={pedidoId} onClickEnviar={patchStatus} />
            <AutohideToast />
        </div>

    )
}