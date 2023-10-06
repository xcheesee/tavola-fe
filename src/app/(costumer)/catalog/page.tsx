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
            <Suspense fallback={<LoadingSkeleton/>}>
                <Hydrate state={dehydratedState} >
                    <CatalogItems />
                </Hydrate>
            </Suspense>
    )
}