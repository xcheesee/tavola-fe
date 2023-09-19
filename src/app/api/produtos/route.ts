import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const url = "http://localhost:5034/produto"
    const res = await fetch(url, {
        method: "POST",
        cache: "no-store"
    })
    if(!res.ok) {
        return NextResponse.error()
    }
    return new Response("pog", {
        status: 200
    })
}


export async function GET(request: NextRequest) {
    const url = "http://localhost:5034/produto"
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store"
    })
    const json = await res.json()
    if(!res.ok) {
        return NextResponse.error()
    }
    return NextResponse.json(json)
}