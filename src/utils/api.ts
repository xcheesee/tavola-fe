import { revalidateTag } from "next/cache"

export async function postProduto({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/produto"
    const options = {
        "method": "POST",
        'body': formData
    }

    const res = await fetch(url, options)
    if(!res.ok) {
        throw Error("bruh")
    }
    const json = await res.json()
    return {res: json, ok: true}
}

export async function putProduto({formData, id}: {formData: FormData, id: number}) {
    const url = `http://localhost:5034/produto/${id}`
    const options = {
        "method": "PUT",
        "body": formData
    }

    const res = await fetch(url, options)
    if(!res.ok) throw Error('blud couldn`t do it')
    const json = await res.json()
    return {res: json, ok: true}
}


export async function getAllProdutos() {
    const url = "http://localhost:5034/produto"

    const res = await fetch(url, {cache: "no-store"})
    if(!res.ok) throw Error('blud couldn`t do it')
    return await res.json()
}

export async function getProduto({id}: {id: string}) {
    const url = `http://localhost:5034/produto/${id}`
    const res = await fetch(url, { cache: "no-store"})
    return (await res.json()).produto

}

export async function deleteProduto({id}: {id: string}) {
    const url = `http://localhost:5034/produto/${id}`
    const res = await fetch(url, {method: "DELETE"})
    return res
}

export async function getAllCategorias() {
    const url = "http://localhost:5034/categoria"
    const res = await fetch(url, {next: {
        tags: ['categorias']
    } })
    return await res.json()
}

export async function postCategoria({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/categoria"
    const res = await fetch(url, { method: "POST", body: formData })
    //revalidateTag('categorias')
    return {ok: true}
}
