export async function getAllCategorias() {
    const url = "http://localhost:5034/categoria"
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store"
    })
    return await res.json()
}

export async function postCategoria({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/categoria"
    const res = await fetch(url, { 
        method: "POST", 
        body: formData,
        cache: "no-store"

    })
    return res
}