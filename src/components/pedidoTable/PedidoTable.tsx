import { PedidoApiData, PedidoApiSendable } from "@/utils/types";
import { Icon } from "@iconify-icon/react";

export default function PedidoTable({ pedidos, onClickView }: { pedidos: PedidoApiData[], onClickView: (arg: number | null) => void }) {
    return (
        <div className="overflow-x-auto py-4">
            <table className="table bg-neutral-100 text-neutral-900">
              <thead>
                <tr className="text-neutral-400">
                  <th>Id</th>
                  <th>Total</th>
                  <th>Forma de Pagamento</th>
                  <th>Status</th>
                  <th>Acao</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map( pedido => {
                    return (<tr key={`pedido${pedido.id}`}>
                      <th>{pedido.id}</th>
                      <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(pedido.total)}</td>
                      <td>{pedido.pagamento}</td>
                      <td>{pedido.status}</td>

                      <td className='flex gap-4'>
                        <div className='tooltip' data-tip="Visualizar">
                          <button onClick={() => {
                            onClickView(pedido?.id ?? null)
                          }}>
                              <Icon icon="carbon:view-filled" width={24} className='text-neutral-600'/>
                          </button>
                        </div>
                      </td>
                    </tr>)}
                )
                }
              </tbody>
            </table>
        </div>
    )
}