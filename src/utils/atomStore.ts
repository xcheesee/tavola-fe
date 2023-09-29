import { atom } from "jotai";
import { Pedido, PedidoItem } from "./types";

export const pedidoAtom = atom<Pedido>({})