export interface HeroItem {
    title: string;
    description: string;
    c2a: string;
    src: string
}

export interface Categoria {
    id: number;
    nome: string;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: Categoria;
}

export interface Pedido {
    forma_pagamento: string;
    status_pedido: string;
    total: number;
    itens: PedidoItem[]
}

export interface PedidoApiSendable extends PedidoApiData {
    itens?: {ProdutoId: number, Quantidade: number}[]
}

export interface PedidoApiData {
    id?: number;
    pagamento: string;
    status: string;
    total: number;
}

export interface PedidoItem {
    produto: Produto,
    qtd: number
}