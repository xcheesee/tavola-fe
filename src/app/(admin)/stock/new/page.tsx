import getQueryClient from "@/app/getQueryClient"
import { NewProdutoForm } from "@/components/forms"
import LoadingSkeleton from "@/components/loadingSkeleton"
import { getAllCategorias } from "@/utils/api/categorias"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Suspense } from 'react'

async function ProdutoForm({title}: {title: string}) {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery(['categorias'], getAllCategorias)
    const dehydratedState = dehydrate(queryClient)

    return (
        <Hydrate state={dehydratedState}>
            <NewProdutoForm title={title}/>
        </Hydrate>
    )

} 

export default function Page() {

    return(
        <div className="grid grid-cols-1 justify-items-center items-center w-full h-full">
            <Suspense fallback={<LoadingSkeleton />}>
                <div className="bg-slate-100 lg:w-2/3 w-full rounded-xl drop-shadow-2xl pb-8">
                    <ProdutoForm title='Adicionar Produto' />
                </div>
            </Suspense>
        </div>
    )
}