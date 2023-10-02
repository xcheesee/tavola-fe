import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import { Pedido, PedidoItem } from "./types";

export const pedidoAtom = atomWithStorage<{[key: number]: PedidoItem}>('pedido', {})

export const toastAtom = atom<{open: boolean, message: string}>({open: false, message: ""})