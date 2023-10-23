import { Pedido, PedidoItem } from "./types";

export function getPedidoTotal(pedido: {[key: number]: PedidoItem}) {
    const total = Object.values(pedido).reduce( (prev, curr, i)  => prev + (curr.produto.valor * curr.quantidade), 0)
    return total
}

export function pedidoObjToApiArray(pedido: {[key: number]: PedidoItem}) {
    const array: {ProdutoId: number, Quantidade: number}[] = []
    Object.values(pedido).forEach( item => {
        array.push({ProdutoId: item.produto.id, Quantidade: item.quantidade})
    })
    return array
}