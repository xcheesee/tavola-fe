import getQueryClient from "@/app/getQueryClient";
import Header from "@/components/header";
import { getAllProdutos } from "@/utils/api/produtos";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import Checkout from "./checkout";

export default async function Page() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery(['produtos'], () => getAllProdutos())
    const dehydratedState = dehydrate(queryClient)

    return(<div className="relative z-10 min-h-screen bg-rangoon-100">
            <div className="h-[40vh] w-full relative shadow-2xl">
                <div className="absolute h-full w-full">
                    <img src="/bg-catalog.png" alt="" className="object-fit w-full h-full"/>
                </div>

                <Header />

                <div className="font-serif text-5xl z-20 relative text-rangoon-100 tracking-[1.5rem] text-center pt-28 pb-28">CHECKOUT</div>
            </div>
            <Hydrate state={dehydratedState}>
                <Checkout />
            </Hydrate>
        </div>
    )
}