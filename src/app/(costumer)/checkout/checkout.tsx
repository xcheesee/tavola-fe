'use client'

import AutohideToast from "@/components/autohideToast/autohideToast"
import CatalogItemCard from "@/components/catalogItemCard"
import CheckoutCard from "@/components/checkoutCard"
import CheckoutItemCard from "@/components/checkoutItemCard"
import { getAllProdutos } from "@/utils/api/produtos"
import { pedidoAtom, toastAtom } from "@/utils/atomStore"
import { getPedidoTotal, pedidoObjToApiArray } from "@/utils/funcs"
import { Pedido, PedidoItem, Produto, PedidoApiSendable } from "@/utils/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { io } from "socket.io-client/debug"

export default function Checkout() {
    //const itens = useQuery({
    //    queryKey: ['produtos'],
    //    queryFn: () => getAllProdutos()
    //})

    const socket = io('ws://localhost:8000')

    const [toast, setToast] = useAtom(toastAtom)

    const router = useRouter()

    const [pedido, setPedido] = useAtom(pedidoAtom)

    const postPedido = useMutation({
        mutationFn: async ({pedido}: {pedido: PedidoApiSendable}) => await fetch('/api/pedidos', {
            method: 'POST',
            body: JSON.stringify(pedido),
            cache: 'no-store'
        }),
        mutationKey: ['pedidos'],
        onSuccess: () => {
            setToast(prev => ({...prev, message: "Pedido enviado.", open: true}))
            //router.push('/catalog')
        }
    })


    return (
        <div className="grid lg:grid-cols-[3fr_1fr] mt-16 xl:px-[230px] ">
            <div className="justify-self-center flex flex-col gap-8">
                {Object.values(pedido)?.map( (item: PedidoItem, i: number) => <CheckoutItemCard item={item.produto} key={`chkout${i}`} qtd={item.qtd}/>)}
            </div>
            <CheckoutCard 
                onClick={async () => {
                    const pedidoData: PedidoApiSendable = {
                        pagamento: 'Dinheiro',
                        status: "Recebido",
                        total: getPedidoTotal(pedido),
                        itens: pedidoObjToApiArray(pedido)
                    }
                    await postPedido.mutateAsync({ pedido: pedidoData })
                    setToast(prev => ({...prev, message: "Pedido enviado.", open: true}))
                    setPedido({})
                    socket.emit('pedidoRealizado')
                    router.push('/catalog')
                }}
            />
            <AutohideToast />
        </div>
    )
}