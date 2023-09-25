import { Produto } from '@/utils/types'
import { Almendra } from 'next/font/google'
import NumberInput from './numberInput'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '700',
    
})

export default function CatalogItemCard({item, checkout=false}: {item: Produto, checkout?: boolean}) {
    return(
        <div className='grid lg:grid-cols-[max-content_1fr] bg-rangoon-50 rounded-xl min-h-[200px] max-w-[700px] shadow-2xl relative'>
            <div className='lg:w-[200px] max-lg:w-2/3 max-lg:mt-4 h-[170px] rounded-lg relative mx-4 self-center max-lg:justify-self-center overflow-hidden'>
                <img src="/abtimg.png" alt="" className='object-fill w-full h-full'/>
            </div>
            <div className='grid grid-rows-[min-content_1fr_min-content] max-lg:justify-items-center my-4 ml-4'>
                <div className='text-3xl font-light tracking-[0.5rem] text-rangoon-800'>{item.nome}</div>
                <div className='text-rangoon-400 text-md lg:mr-8 py-8 max-lg:w-[20ch]'>{item.descricao}</div>
                <div className='grid grid-cols-2 justify-between items-center mr-8'>
                    <div className='font-light text-2xl text-rangoon-800'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.valor)}</div>
                    {!checkout
                        ?<button className='btn bg-gold-600 text-rangoon-50 border-gold-600 hover:text-gold-600'>Add to Cart</button>
                        :<></>
                    }
                    
                </div>
            </div>
            <div className='absolute right-2 top-2'>
                <NumberInput />
            </div>
        </div>
    )
}