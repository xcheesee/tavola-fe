import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const url = "http://localhost:5034/pedido"
    const pedido = await request.text()
    const res = await fetch(url, { 
        method: "POST", 
        body: pedido,
        cache: "no-store",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //if(!res.ok) {
    //    return NextResponse.error()
    //}
    //const json = await res.json()
    //return NextResponse.json(json)
    return new Response("pog", {
        status: 200
    })
}