import { deleteProduto } from "@/utils/api"
import { useQueryClient } from "@tanstack/react-query"

export default function DeleteModal({data, id}: {data: {id: string}, id: string}) {
  const queryClient = useQueryClient()
    return(
        <dialog id={id} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Deseja Realmente Deletar a entrada #{data.id} ?</h3>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-success" type="button" onClick={async (e) => {
                    e.preventDefault()
                    const res = await deleteProduto({id: data.id})
                    const modal = document.getElementById(id) as HTMLDialogElement
                    if(res.ok) {
                      queryClient.invalidateQueries(["produtos"])
                      modal.close()
                    }
                }}>Confirmar</button>
                <button className="btn">Cancelar</button>
              </form>
            </div>
          </div>
        </dialog>
    )
}