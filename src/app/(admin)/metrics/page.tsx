import getQueryClient from "@/app/getQueryClient";
import Metrics from "./metrics";
import { getReceitaTotais, getVendasTotais } from "@/utils/api/produtos";
import { Hydrate, dehydrate } from "@tanstack/react-query";

export default async function Page() {
    const queryClient = getQueryClient()
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['receitaTotais'],
            queryFn: () => getReceitaTotais()
        }),
        queryClient.prefetchQuery({
            queryKey: ['vendidoTotais'],
            queryFn: () => getVendasTotais()
        })
    ])
    const dehydratedState = dehydrate(queryClient)
    return (
        <div className="w-full px-8 py-4">
            <Hydrate state={dehydratedState}>
                <Metrics />
            </Hydrate>
        </div>
    )
}