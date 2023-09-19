import { Produto } from '@/utils/types'
import { Almendra } from 'next/font/google'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '700',
    
})

export default function CatalogItemCard({item}: {item: Produto}) {
    return(
        <div className="w-[380px] h-[300px] bg-neutral-500 border-4 border-black relative overflow-hidden">
            <div className='w-full h-full absolute'>
                <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/hamburguer-unsplash.jpg?w=876&h=484&crop=1" alt="" className='w-full h-full object-fit'/>
            </div>
            <div className="absolute w-full h-full translate-y-3/4 hover:transform-none transition-all z-10">
                <span className="absolute bg-black w-full h-full hover:opacity-90 transition-all bg"></span>
                <div className="absolute grid w-full h-full grid-rows-[max-content_1fr] z-10 px-4">
                    <div className='flex justify-between items-center py-4 [&>*]:text-neutral-300'>
                        <h1 className={`${almendra.className} text-3xl`}>{item.nome}</h1>
                        <div className='font-bold'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.valor)}</div>
                    </div>
                    <p>{item.descricao}</p>
                </div>
            </div>
        </div>
    )
}