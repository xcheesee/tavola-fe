'use client'

import Tab from "@/components/tab"
import TabContent from "@/components/tabContent"
import { useState } from "react"
import {Icon} from '@iconify-icon/react'
import FiltroDropdown from "@/components/filtroDropdown"

export default function Orders() {
    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return(
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
                <div className="overflow-x-auto py-4">
                    <table className="table bg-neutral-100 text-neutral-900">
                      {/* head */}
                      <thead>
                        <tr className="text-neutral-400">
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                </div> 
            </TabContent>
            <TabContent tabId={1} activeTab={activeTab}>Pedidos</TabContent>
        </div>
    )
}