export async function getEstoque() {
    const url = "http://localhost:5034/produto/alerta_estoque_produto"
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store"
    })
    return await res.json()
}