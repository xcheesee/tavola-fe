'use client'
import { useState } from 'react'
import { ShowPedidoModal } from "@/components/modals"
import SimpleOverviewCard from "@/components/simpleOverviewCard"
import { getEstoque } from "@/utils/api/estoque"
import { getAllPedidos } from "@/utils/api/pedidos"
import { EstoqueItem, Produto } from "@/utils/types"
import { Icon } from '@iconify-icon/react'
import { useQuery } from "@tanstack/react-query"

export default function Dashboard() {
    const estoque = useQuery({
        queryKey:['alertaEstoque'], 
        queryFn: async () => await getEstoque(),
    })

    const vendas = useQuery({
        queryKey: ['pedidos'],
        queryFn: async () => await getAllPedidos(),
        onSuccess: (res) => console.log(res)
    })

    const ultimasVendas = vendas?.data.slice(0,5)

    const faturamento = vendas?.data?.reduce((acc: any, curr: any) => {
        return acc + curr.total
    }, 0)

    const [pedidoId, setPedidoId] = useState<number|null>(null)

    const modalId = 'dash_pedido_modal'

    return (
        <>
        <div className="w-full h-full grid grid-cols-3 auto-rows-min gap-8 px-4 py-8">
            <h1 className="self-start col-start-1 col-end-[-1] text-5xl font-bold">Visao Geral</h1>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Vendas Efetuadas</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:shopping-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4">{vendas.data.length}</p>
            </SimpleOverviewCard>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Faturamento</span>
                <div className="row-span-2 self-end"><Icon icon="solar:dollar-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4"><span className="font-bold text-3xl text-neutral-400">R$</span>{faturamento.toFixed(2)}</p>
            </SimpleOverviewCard>
            <div className="card px-4 py-2 bg-neutral-200 flex-initial row-span-3">
                <div className="gap-4 pl-8 py-4 flex flex-col">
                    <span className="text-2xl font-bold text-neutral-400">Alerta de Estoque</span>
                    <div className="grid grid-cols-1 content-end divide-y divide-neutral-400">
                        {!estoque.isLoading && estoque?.data?.map( (produto: EstoqueItem) => (
                            <div className="flex justify-between items-end pt-6 pb-2" ><span className="text-3xl">{produto.produto}</span> <span className="text-2xl text-red-400">x <span className="font-bold">{produto.quantidade}</span></span></div>
                        ))}
                    </div>
                </div>
            </div>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Ticket Medio</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:graph-line" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4"><span className="font-bold text-3xl text-neutral-400">R$</span>{(faturamento/vendas?.data?.length).toFixed(2)}</p>
            </SimpleOverviewCard>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Clientes Cadastrados</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:user-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4">200</p>
            </SimpleOverviewCard>
            <div className="card px-4 py-2 bg-neutral-200 flex-initial col-span-2">
                <div className="gap-4 pl-8 py-4 flex flex-col">
                    <span className="text-2xl font-bold text-neutral-400">Ultimas Vendas</span>
                    <div className="grid grid-cols-1 content-end divide-y divide-neutral-400">
                        {ultimasVendas?.map( (venda: any) => {
                            return(
                                <div className="grid grid-cols-[1fr_1fr_200px] pt-4">
                                    <div>
                                        <div className="font-bold">Id</div>
                                        <div className="pl-4" ><span className="text-2xl">{venda.id}</span> </div>
                                    </div>
                                    <div className="">
                                        <div className="font-bold"> Total</div>
                                        <span className="text-2xl pl-4">R$ {venda.total.toFixed(2)}</span>
                                    </div>
                                    <div className="">
                                        <div className="font-bold">Acao</div>
                                        <div className="pl-4">
                                            <button onClick={() => {
                                                const modal = document.getElementById(modalId) as HTMLDialogElement
                                                setPedidoId(venda.id)
                                                modal.show()
                                            }}>
                                                <Icon icon={"mdi:eye"} width={32}></Icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <ShowPedidoModal pedidoId={pedidoId} modalId={modalId} />
        </>
    )
}