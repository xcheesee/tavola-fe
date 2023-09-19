import SimpleOverviewCard from "@/components/simpleOverviewCard"
import { Icon } from '@iconify-icon/react'

export default function Dashboard() {
    return (
        <div className="w-full h-full grid grid-cols-3 auto-rows-min gap-8 px-4 py-8">
            <h1 className="self-start col-start-1 col-end-[-1] text-5xl font-bold">Visao Geral</h1>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Vendas Efetuadas</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:shopping-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4">69</p>
            </SimpleOverviewCard>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Faturamento</span>
                <div className="row-span-2 self-end"><Icon icon="solar:dollar-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4"><span className="font-bold text-3xl text-neutral-400">R$</span>4200.00</p>
            </SimpleOverviewCard>
            <div className="card px-4 py-2 bg-neutral-200 flex-initial row-span-3">
                <div className="gap-4 pl-8 py-4 flex flex-col">
                    <span className="text-2xl font-bold text-neutral-400">Alerta de Estoque</span>
                    <div className="grid grid-cols-1 content-end divide-y divide-neutral-400">
                        <div className="flex justify-between items-end pt-6 pb-2" ><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl text-red-400">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl text-red-400">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl text-red-400">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl text-red-400">x 10un</span></div>
                    </div>
                </div>
            </div>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Ticket Medio</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:graph-line" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4"><span className="font-bold text-3xl text-neutral-400">R$</span>200.00</p>
            </SimpleOverviewCard>
            <SimpleOverviewCard>
                <span className="text-2xl font-bold text-neutral-400">Clientes Cadastrados</span>
                <div className="row-span-2 self-end"><Icon icon="mdi:user-outline" width={64}></Icon></div>
                <p className="text-7xl text-cyan-600 font-bold pl-4">200</p>
            </SimpleOverviewCard>
            <div className="card px-4 py-2 bg-neutral-200 flex-initial col-span-2">
                <div className="gap-4 pl-8 py-4 flex flex-col">
                    <span className="text-2xl font-bold text-neutral-400">Ultimas Vendas</span>
                    <div className="grid grid-cols-1 content-end divide-y divide-neutral-400">
                        <div className="flex justify-between items-end pt-6 pb-2" ><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl">x 10un</span></div>
                        <div className="flex justify-between items-end pt-6 pb-2"><span className="text-3xl">Fralda Pampers</span> <span className="text-2xl">x 10un</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}