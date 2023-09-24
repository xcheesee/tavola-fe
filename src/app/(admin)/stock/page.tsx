import { getAllProdutos } from "@/utils/api/produtos";
import Produtos from "./produtos";
import getQueryClient from "@/app/getQueryClient";
import { dehydrate, Hydrate} from "@tanstack/react-query"

export default async function Page() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['produtos'], () => getAllProdutos())
  const dehydratedState = dehydrate(queryClient)

    return(
        <div className="grid grid-cols-2 gap-8 px-4 pt-16">
            <h2 className="font-bold col-span-2 text-5xl">Estoque</h2>
            <Hydrate state={dehydratedState}>
              <Produtos />
            </Hydrate>
        </div>
    )
}