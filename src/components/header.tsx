import Link from "next/link"
import { Icon } from '@iconify-icon/react'

export default function Header() {
    return(
        <nav className="flex justify-around relative w-full  z-10 ">
            <div className="flex flex-1 relative pt-4 px-8">
                <div className="flex flex-1 justify-around items-center z-20">
                    <div className="text-gold-600 font-bold text-3xl font-light">Tavola Redonda</div>
                    <Link href={'/catalog'}>
                        <div className="text-white hover:text-gold-600 font-light">Cardapio</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="text-white hover:text-gold-600 font-light">Endereco</div>
                    </Link>

                    <Link href={'/'}>
                        <div className="text-white hover:text-gold-600 font-light">Contato</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="text-white hover:text-gold-600 font-light">Sobre nos</div>
                    </Link>

                </div>
                    <div className="flex flex-1 gap-4 px-4 justify-end">
                        <button className="px-3 text-white flex items-center hover:text-gold-600">
                            <Icon icon="mdi:user" width={40}/>
                        </button>
                        <button className="px-3 text-white flex items-center hover:text-gold-600">
                            <Icon icon="mdi:cart" width={40}/>
                        </button>
                    </div>
            </div>
        </nav>
    )
}