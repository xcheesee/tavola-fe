export async function getAllProdutos(options?: {
    categoria?: string
}) {
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

export async function postProduto({formData}: {formData: FormData}) {
    const url = "http://localhost:5034/produto"

    const res = await fetch(url, {
        method: "POST",
        body: formData,
        cache: "no-store"
    })
    if(!res.ok) {
        return res
    }
    const json = await res.json()
    return {res: json, ok: true}
}

export async function putProduto({formData, id}: {formData: FormData, id: number}) {
    const url = `http://localhost:5034/produto/${id}`

    const res = await fetch(url, {
        method: "PUT",
        body: formData,
        cache: "no-store"
    })
    if(!res.ok) throw Error('blud couldn`t do it')
    const json = await res.json()
    return {res: json, ok: true}
}

export async function deleteProduto({id}: {id: string}) {
    const url = `http://localhost:5034/produto/${id}`
    const res = await fetch(url, {
        method: "DELETE",
        cache: "no-store"
    })
    return res
}

export async function getReceitaTotais() {
    const url = "http://localhost:5034/produto/valor_total_vendido"
    const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store'
    })
    return await res.json()
}

export async function getVendasTotais() {
    const url = "http://localhost:5034/produto/vendas_por_produto"
    const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store'
    })
    return await res.json()
}