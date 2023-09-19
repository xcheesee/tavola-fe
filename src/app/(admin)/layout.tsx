import React from "react";
import  SidebarItem from '@/components/sidebarItem'

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="grid lg:grid-cols-[200px_1fr] grid-cols-1 grid-rows-[min-content_1fr] min-h-screen">
            <div className="col-span-2 bg-neutral-300 px-4 py-2 justify-between items-center flex">
                <h1 className="text-3xl font-bold">Tavola Redonda</h1>
                <div className="flex gap-8">
                    <div className="">Notificacoes</div>
                    <div className="">Login/out</div>
                </div>
            </div>

            <div className="bg-neutral-300 max-lg:hidden p-4 flex flex-col gap-8">
                <SidebarItem icon="carbon:dashboard" href="/dashboard">Dashboard</SidebarItem>
                <SidebarItem icon="carbon:box" href="/stock">Estoque</SidebarItem>
                <SidebarItem icon="carbon:service-desk" href="/orders">Pedidos</SidebarItem>
                <SidebarItem icon="carbon:chart-area" href="/metrics">Relatorios</SidebarItem>
                <SidebarItem icon="carbon:id-management" href="/users">Usuarios</SidebarItem>
            </div>
            <div className="">
                {children}
            </div>

        </div>
    )
}