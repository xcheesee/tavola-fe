import { Pedido } from "./types";

export function getPedidoTotal(pedido: Pedido) {
    const total = Object.values(pedido).reduce( (prev, curr, i)  => prev + (curr.produto.valor * curr.qtd), 0)
    return total
}