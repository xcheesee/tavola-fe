'use client'

import CatalogItemCard from "@/components/catalogItemCard"
import CheckoutCard from "@/components/checkoutCard"
import { getAllProdutos } from "@/utils/api/produtos"
import { Produto } from "@/utils/types"
import { useQuery } from "@tanstack/react-query"

export default function Checkout() {
    const itens = useQuery({
        queryKey: ['produtos'],
        queryFn: () => getAllProdutos()
    })
    return (
        <div className="grid grid-cols-[3fr_1fr] mt-16 xl:px-[230px] h-[300vh]">
            <div className="justify-self-center flex flex-col gap-8">
                {itens?.data?.map( (item: Produto, i: number) => <CatalogItemCard checkout item={item} key={`prod${i}`}/>)}
            </div>
            <CheckoutCard />
        </div>
    )
}