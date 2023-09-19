import { NewProdutoForm } from "@/components/forms"
import LoadingSkeleton from "@/components/loadingSkeleton"
import { getAllCategorias } from "@/utils/api"
import { Suspense } from 'react'

async function ProdutoForm({title}: {title: string}) {
    const categorias = await getAllCategorias()

    return <NewProdutoForm title={title} categorias={categorias} />
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