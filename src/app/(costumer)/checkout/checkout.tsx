'use client'

import CatalogItemCard from "@/components/catalogItemCard"
import CheckoutCard from "@/components/checkoutCard"
import CheckoutItemCard from "@/components/checkoutItemCard"
import { getAllProdutos } from "@/utils/api/produtos"
import { pedidoAtom } from "@/utils/atomStore"
import { PedidoItem, Produto } from "@/utils/types"
import { useQuery } from "@tanstack/react-query"
import { useAtomValue} from 'jotai'

export default function Checkout() {
    //const itens = useQuery({
    //    queryKey: ['produtos'],
    //    queryFn: () => getAllProdutos()
    //})

    const pedido = useAtomValue(pedidoAtom)
    return (
        <div className="grid grid-cols-[3fr_1fr] mt-16 xl:px-[230px] h-[300vh]">
            <div className="justify-self-center flex flex-col gap-8">
                {Object.values(pedido)?.map( (item: PedidoItem, i: number) => <CheckoutItemCard item={item.produto} key={`chkout${i}`} qtd={item.qtd}/>)}
            </div>
            <CheckoutCard />
        </div>
    )
}