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