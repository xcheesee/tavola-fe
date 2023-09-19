import { getAllCategorias, getAllProdutos } from "@/utils/api"
import Catalog from "./catalog"
import { Suspense } from "react"
import LoadingSkeleton from "@/components/loadingSkeleton"

async function CatalogItems() {
    const itens = await getAllProdutos()
    const categorias = await getAllCategorias()

    return <Catalog itens={itens} categorias={categorias} />
}

export default function Page() {
    return(
        <Suspense fallback={<LoadingSkeleton/>}>
            <CatalogItems />
        </Suspense>
    )
}