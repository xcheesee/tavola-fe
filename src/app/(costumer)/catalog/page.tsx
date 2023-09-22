import { getAllCategorias } from "@/utils/api/categorias"
import { getAllProdutos } from "@/utils/api/produtos"
import Catalog from "./catalog"
import { Suspense } from "react"
import LoadingSkeleton from "@/components/loadingSkeleton"
import Header from "@/components/header"
import getQueryClient from "@/app/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"

async function CatalogItems() {
    const categorias = await getAllCategorias()

    return <Catalog categorias={categorias} />
}

export default async function Page() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery(['produtos'], () => getAllProdutos())
    const dehydratedState = dehydrate(queryClient)

    return(
        <div className="relative bg-rangoon-100 z-10 min-h-screen">
            <div className="absolute h-[40vh] w-full ">
                <img src="./bg-catalog.png" alt="" className="object-fit w-full h-full"/>
            </div>
            <Header />
            <div className="font-serif text-5xl z-20 relative text-rangoon-100 tracking-[1.5rem] text-center pt-28">MENU</div>
            <Suspense fallback={<LoadingSkeleton/>}>
                <Hydrate state={dehydratedState} >
                    <CatalogItems />
                </Hydrate>
            </Suspense>
        </div>
    )
}