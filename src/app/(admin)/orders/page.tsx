import getQueryClient from "@/app/getQueryClient";
import Orders from "./orders";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getAllPedidos } from "@/utils/api/pedidos";


export default async function Page() {

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['pedidos'], () => getAllPedidos())
  const dehydratedState = dehydrate(queryClient)

  return(
    <Hydrate state={dehydratedState}>
      <Orders />
    </Hydrate>
  )
}