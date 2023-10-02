'use client'

import Tab from "@/components/tab"
import TabContent from "@/components/tabContent"
import { useState } from "react"
import FiltroDropdown from "@/components/filtroDropdown"
import { useQuery } from "@tanstack/react-query"
import { getAllPedidos } from "@/utils/api/pedidos"
import PedidoTable from "@/components/pedidoTable"

export default function Orders() {

    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const pedidos = useQuery({
        queryFn: () => getAllPedidos(),
        queryKey: ['pedidos'],
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
                
                <PedidoTable pedidos={pedidos?.data} />
            </TabContent>
            <TabContent tabId={1} activeTab={activeTab}>Pedidos</TabContent>
        </div>

    )
}