import LoadingSkeleton from "@/components/loadingSkeleton";
import { EditProdutoForm } from "@/components/forms";
import { getAllCategorias, getProduto } from "@/utils/api";
import { Suspense } from "react";

async function EditForm({produtoId, title}: { produtoId: string, title: string}) {
    const produto = await getProduto({id: produtoId})
    const categorias = await getAllCategorias()

    return(
        <EditProdutoForm title={title} produto={produto} categorias={categorias} action="edit" />
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