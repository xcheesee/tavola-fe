import LoadingSkeleton from "@/components/loadingSkeleton";
import { EditProdutoForm } from "@/components/forms";
import { getProduto } from "@/utils/api/produtos";
import { Suspense } from "react";
import getQueryClient from "@/app/getQueryClient";
import { getAllCategorias } from "@/utils/api/categorias";
import { Hydrate, dehydrate } from "@tanstack/react-query";

async function EditForm({produtoId, title}: { produtoId: string, title: string}) {
    const produto = await getProduto({id: produtoId})
    const queryClient = getQueryClient()
    queryClient.prefetchQuery(['categorias'], getAllCategorias)
    const dehydratedState = dehydrate(queryClient)

    return(
        <Hydrate state={dehydratedState} >
            <EditProdutoForm title={title} produto={produto} />
        </Hydrate>
    )
}

export default function Page({params}: {params: any}) {
    return (
        <div className="grid grid-cols-1 justify-items-center items-center w-full h-full">
            <Suspense fallback={<LoadingSkeleton/>}>
                <div className="bg-slate-100 lg:w-2/3 w-full rounded-xl drop-shadow-2xl pb-8">
                    <EditForm produtoId={params.id} title={`Editar Produto #${params.id}`}/>
                </div>
            </Suspense>
        </div>
    )
}