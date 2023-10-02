export async function getAllPedidos() {
    const url = "http://localhost:5034/pedido"
    const res = await fetch(url, { 
        method: "GET", 
        cache: "no-store"
    })
    if(!res.ok) {
        throw Error('bruv')
    }
    const json = await res.json()
    return json
}
export async function postPedido({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/pedido"
    const res = await fetch(url, { 
        method: "POST", 
        body: formData,
        cache: "no-store"
    })
    if(!res.ok) {
        throw Error('bruv')
    }
    const json = await res.json()
    return json
}