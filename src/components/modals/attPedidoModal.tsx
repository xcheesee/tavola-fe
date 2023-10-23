import { toastAtom } from "@/utils/atomStore"
import { useQueryClient } from "@tanstack/react-query"
import { useSetAtom } from "jotai"
import { io } from "socket.io-client"

export default function AttPedidoModal({modalId, pedidoId, onClickEnviar}: {modalId: string, pedidoId: number | null, onClickEnviar: (args: any) => {}}) {
    //const queryClient = useQueryClient()
    //const setToast = useSetAtom(toastAtom)
    //const socket = io("ws://localhost:8000")
    return(
        <dialog id={modalId} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Deseja Realmente Atualizar o Status do Pedido #{pedidoId} ?</h3>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-success" type="button" onClick={onClickEnviar
                  //async (e) => {
                    //e.preventDefault()
                    //const res = await fetch(`/api/pedidos/${pedidoId}`, {
                    //    method: "PATCH",
                    //})
                    //const modal = document.getElementById(modalId) as HTMLDialogElement
                    //if(res.ok) {
                    //    setToast(prev => ({...prev, open: true, message: "Status Atualizado."}))
                    //    queryClient.invalidateQueries()
                    //    socket.emit('cozinhaStatus')
                    //    modal.close()
                    //}
                    //}
                }>Confirmar</button>
                <button className="btn">Cancelar</button>
              </form>
            </div>
          </div>
        </dialog>
    )
}