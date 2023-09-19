import { Categoria } from "@/utils/types"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const url = "http://localhost:5034/categoria"
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store"
    })
    const categorias: Categoria[] = await res.json()
    return NextResponse.json(categorias)
}

export async function POST(request: NextRequest) {
    const url = "http://localhost:5034/categoria"
    const formData = await request.formData()
    const res = await fetch(url, { 
        method: "POST", 
        body: formData, 
        cache: "no-store" 
    })
    if (!res.ok) {
        return NextResponse.error()
    }
    return new Response("Categoria cadastrada com sucesso!", {
        status: 200
    })
}