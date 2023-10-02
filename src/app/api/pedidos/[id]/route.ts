import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const url = `http://localhost:5034/pedido/${params.id}`
    const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store'
    })
    if(!res.ok) {
        return NextResponse.error()
    }
    const data = await res.json()
    return NextResponse.json(data.produto)
}