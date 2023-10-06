'use client'

import Link from "next/link"
import { Icon } from '@iconify-icon/react'
import SubheaderLink from "./subheaderLink"
import { pedidoAtom } from "@/utils/atomStore"
import { useAtomValue } from 'jotai'

export default function Header() {
    const pedido = useAtomValue(pedidoAtom)

    return(
        <nav className="max-xl:hidden grid min-xl:grid-cols-[1fr_min-content] grid-cols-2 2xl:px-[230px] z-40 w-full  relative pt-4 justify-between">
            <div className="flex gap-8 justify-between items-center z-20">
                <Link href={'/'}>
                    <div className="text-gold-600 font-bold text-3xl font-light">Tavola Redonda</div>
                </Link>

                <SubheaderLink href="/catalog">
                    Cardapio 
                </SubheaderLink>

                <SubheaderLink href="/#loc">
                    Endereco
                </SubheaderLink>

                <SubheaderLink href="/">
                    Contato
                </SubheaderLink>

                <SubheaderLink href="/#about">
                    Sobre Nos
                </SubheaderLink>
            </div>

            <div className="flex gap-8 justify-self-end self-center">
                <details className="dropdown">
                    <summary className="text-white flex items-center hover:text-gold-600">
                        <Icon icon="mdi:user" width={40}/>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <Link href='/profile' className="flex content-center text-xl">
                                <Icon icon="mdi:form" width={24}/>
                                Perfil
                            </Link>
                        </li>

                        <li>
                            <Link href="/profile/orders" className="flex content-center text-xl">
                                <Icon icon="material-symbols:receipt" width={24}/>
                                Pedidos
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex content-center text-xl">
                                <Icon icon="bxs:exit" width={24}/>
                                Sair
                            </Link>
                        </li>
                    </ul>
                </details>
                <Link href={'/checkout'} className="relative">
                    {Object.values(pedido).length > 0
                        ?<div className="badge absolute -right-2 -top-2 rounded-full">{Object.values(pedido).length}</div>
                        :<></>
                    }
                    <div className="text-white flex items-center hover:text-gold-600">
                        <Icon icon="mdi:cart" width={40}/>
                    </div>
                </Link>
            </div>
        </nav>
    )
}