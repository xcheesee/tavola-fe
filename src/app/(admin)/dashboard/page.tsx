import getQueryClient from "@/app/getQueryClient";
import Dashboard from "./dashboard";
import { getEstoque } from "@/utils/api/estoque";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getAllPedidos } from "@/utils/api/pedidos";

export default async function Page() {
    const queryClient = getQueryClient()
    await Promise.all([
        queryClient.prefetchQuery(['alertaEstoque'], async () => await getEstoque()), 
        queryClient.prefetchQuery(['pedidos'], () => getAllPedidos())
    ])
    //await queryClient.prefetchQuery(['alertaEstoque'], async () => await getEstoque())
    //await queryClient.prefetchQuery(['pedidos'], () => getAllPedidos())
    const dehydratedState = dehydrate(queryClient)
    return(
        <Hydrate state={dehydratedState}>
            <Dashboard/>
        </Hydrate>
    )
}