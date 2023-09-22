import { Produto } from '@/utils/types'
import { Almendra } from 'next/font/google'
import NumberInput from './numberInput'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '700',
    
})

export default function CatalogItemCard({item}: {item: Produto}) {
    return(
        <div className='grid grid-cols-[max-content_1fr] bg-rangoon-50 rounded-xl h-[200px] w-[700px] shadow-2xl relative'>
            <div className='w-[200px] h-[170px] rounded-lg relative mx-4 self-center overflow-hidden'>
                <img src="./abtimg.png" alt="" className='object-fill w-full h-full'/>
            </div>
            <div className='grid grid-rows-[min-content_1fr_min-content] my-4 ml-4'>
                <div className='text-3xl font-light tracking-[0.5rem]'>{item.nome}</div>
                <div className='text-rangoon-500 text-md ml-4'>{item.descricao}</div>
                <div className='grid grid-cols-2 justify-between items-center mr-8'>
                    <div className='font-light text-2xl'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.valor)}</div>
                    <button className='btn bg-gold-600 text-rangoon-50 hover:text-gold-600'>Add to Cart</button>
                </div>
            </div>
            <div className='absolute right-2 top-2'>
                <NumberInput />
            </div>
        </div>
    )
}