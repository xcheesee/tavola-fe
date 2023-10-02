import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: {id: string} }) {
    const url = `http://localhost:5034/produto/${params.id}`
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store"
    })
    if(!res.ok) {
        return NextResponse.error()
    }
    const produto = await res.json()
    return NextResponse.json(produto)
}

export async function DELETE(request: NextRequest, { params }: { params: {id: string} }) {
    const url = `http://localhost:5034/produto/${params.id}`
    const res = await fetch(url, {
        method: "DELETE",
        cache: "no-store"
    })
    if(!res.ok) {
        return NextResponse.error()
    }
    return new Response("Produto Excluido com sucesso?", {
        status: 200
    })
}

export async function PUT(request: NextRequest, { params }: { params: {id: string} }) {
    const url = `http://localhost:5034/produto/${params.id}`
    const res = await fetch(url, {
        method: "PUT",
        cache: "no-store"
    })
    if(!res.ok) {
        return NextResponse.error()
    }
    return new Response("Produto Editado com sucesso?", {
        status: 200
    })
}