import { PedidoApiData, PedidoApiSendable } from "@/utils/types";

export default function PedidoTable({ pedidos }: { pedidos: PedidoApiData[]}) {
    console.log(pedidos)
    return (
        <div className="overflow-x-auto py-4">
            <table className="table bg-neutral-100 text-neutral-900">
              <thead>
                <tr className="text-neutral-400">
                  <th>Id</th>
                  <th>Total</th>
                  <th>Forma de Pagamento</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map( pedido => {
                    return (<tr key={`pedido${pedido.id}`}>
                      <th>{pedido.id}</th>
                      <td>{pedido.total}</td>
                      <td>{pedido.forma_Pagamento}</td>
                      <td>{pedido.status_Pedido}</td>
                    </tr>)}
                )
                }
              </tbody>
            </table>
        </div>
    )
}