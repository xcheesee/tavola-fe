import { useQuery } from "@tanstack/react-query"
import LoadingSkeleton from "../loadingSkeleton"
import { PedidoItem } from "@/utils/types"

export default function ShowPedidoModal({ modalId, pedidoId }: { modalId: string, pedidoId: number | null }) {

    const pedido = useQuery({
        queryFn: async () => {
            const res = await fetch(`/api/pedidos/${pedidoId}`, {
                method: 'GET',
                cache: 'no-store'
            })
            return await res.json()
        },
        queryKey: ['pedidos', pedidoId],
        enabled: !!pedidoId
    })

    return (
        <dialog id={modalId} className="modal bg-black bg-opacity-50">
          <div className="modal-box">
            { pedido.isLoading
                ?<div className="grid grid-cols-2 gap-4 justify-items-center">
                    <div className="w-full h-[50px] col-span-2">
                        <LoadingSkeleton />
                    </div>

                    <div className="w-full h-[25px]">
                        <LoadingSkeleton />
                    </div>

                    <div className="w-full h-[25px]">
                        <LoadingSkeleton />
                    </div>

                    <div className="w-full h-[25px]">
                        <LoadingSkeleton />
                    </div>

                    <div className="w-full h-[25px]">
                        <LoadingSkeleton />
                    </div>

                    <div className="w-1/2 h-[50px] col-start-2 justify-self-end">
                        <LoadingSkeleton />
                    </div>
                </div>
                :<>
                    <h3 className="font-bold text-lg">Pedido #{pedido?.data?.id}</h3>
                    <div className="grid grid-cols-2 px-8 gap-4">
                        <div>
                            <p className="py-4">Status</p>
                            <p className="pl-6 pr-4 font-bold">{pedido?.data?.status}</p>
                        </div>

                        <div>
                            <p className="py-4">Forma de Pagamento</p>
                            <p className="pl-6 pr-4 font-bold">{pedido?.data?.pagamento}</p>
                        </div>

                        <div>
                            <p className="py-4">Total</p>
                            <p className="pl-6 pr-4 font-bold">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(pedido?.data?.total)}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="py-4 font-bold">Itens</p>
                            <div className="pl-4">
                                {pedido?.data?.itens?.map( (item: PedidoItem , i: number) => (
                                    <div className="flex justify-between border-b-2 my-4" key={`pedido-item-${i}`}>
                                        <div>{item.produto.nome} x {item.quantidade}</div>
                                        <div>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(item.quantidade * item.produto.valor)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                </>
            }
          </div>
        </dialog>
    )
}