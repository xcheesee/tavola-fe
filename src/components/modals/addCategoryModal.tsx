import { postCategoria } from "@/utils/api"

export default function AddCategoryModal({modalId}: {modalId: string}) {
    return(
        <dialog id={modalId} className="modal">
            <div className="w-[500px] h-[300px] bg-white rounded-xl p-4 ">
                <p className="self-start justify-self-start text-xl pb-2">Adicionar Categoria</p>
                <form
                    method="dialog"
                    onSubmit={async (e) => {
                        e.preventDefault()

                        const formData = new FormData(e.currentTarget)
                        const res = await postCategoria({formData})
                        const modal = document.getElementById(modalId) as HTMLDialogElement
                        if (res.ok) {
                            modal.close()
                        }
                        
                    }}
                    className="grid gap-8 h-full"
                >
                    <div className="grid items-center h-full">
                        <input type="text" name="nome" className="input input-bordered w-full" placeholder="Categoria"/>

                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <button type="submit" className="btn btn-success">Enviar</button>
                        <button className="btn" type="reset" onClick={(e) => {
                            const modal = document.getElementById(modalId) as HTMLDialogElement
                            modal.close() 
                        }}>Cancelar</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}