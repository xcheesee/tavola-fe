import getQueryClient from "@/app/getQueryClient"
import Header from "@/components/header"
import { getAllPedidos } from "@/utils/api/pedidos"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import UserOrders from "./userOrders"

export default function Page() {
    const queryClient = getQueryClient()
    queryClient.prefetchQuery(['pedidos'], () => getAllPedidos())
    const dehydratedState = dehydrate(queryClient)

    return(
       <div className="">
            <div className="h-[40vh] relative">
                <div className="absolute h-full w-full">
                    <img src="/bg-catalog.png" alt="" className="object-fit w-full h-full"/>
                </div>

                <Header />

                <div className="font-serif text-5xl z-20 relative text-rangoon-100 tracking-[1.5rem] text-center pt-28">PEDIDOS</div>
            </div>

            <Hydrate state={dehydratedState}>
                <UserOrders />
            </Hydrate>


       </div> 
    )
}