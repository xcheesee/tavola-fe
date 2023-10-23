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
    return NextResponse.json(data)
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string }}) {
    const url = `http://localhost:5034/pedido/${params.id}`
    const status = await request.text()
    const body = [{
        op: 'replace',
        path: '/status',
        value: status
    }]
    const res = await fetch(url, {
        method: 'PATCH',
        cache: 'no-store',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': "application/json"
        }

    })
    //if(!res.ok) {
    //    return NextResponse.error()
    //}
    //const data = await res.json()
    //console.log(data)
    return new Response('pog', {
        status: 200
    })
}