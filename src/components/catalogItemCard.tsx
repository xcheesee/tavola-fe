import { Produto } from '@/utils/types'
import { Almendra } from 'next/font/google'
import NumberInput from './numberInput'
import { useState } from 'react'
import { pedidoAtom } from '@/utils/atomStore'
import { useAtom, useSetAtom } from 'jotai/react'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '700',
    
})

export default function CatalogItemCard({item, checkout=false, qtd}: {item: Produto, checkout?: boolean, qtd?: number}) {
    const [input, setInput] = useState(qtd ?? 1)
    const [pedido, setPedido] = useAtom(pedidoAtom)
    return(
        <div className='grid lg:grid-cols-[max-content_1fr] bg-rangoon-50 rounded-xl min-h-[200px] max-w-[700px] shadow-2xl relative'>
            <div className='lg:w-[200px] max-lg:w-2/3 max-lg:mt-4 h-[170px] rounded-lg relative mx-4 self-center max-lg:justify-self-center overflow-hidden'>
                <img src="/abtimg.png" alt="" className='object-fill w-full h-full'/>
            </div>
            <div className='grid grid-rows-[min-content_1fr_min-content] max-lg:justify-items-center my-4 ml-4'>
                <div className='text-3xl font-light tracking-[0.5rem] text-rangoon-800'>{item.nome}</div>
                <div className='text-rangoon-400 text-md lg:mr-8 py-8 max-lg:w-[20ch]'>{item.descricao}</div>
                <div className='grid grid-cols-[1fr_max-content] justify-between items-center mr-8'>
                    <div className='font-light text-2xl text-rangoon-800 pr-4'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.valor * input)}</div>
                        <button 
                            className='btn bg-gold-600 text-rangoon-50 border-gold-600 hover:text-gold-600' 
                            onClick={() => {
                                setPedido(prev => ({...prev, [item.id]: {
                                    produto: item,
                                    qtd: input
                                }}))
                                setInput(1)
                                console.log(pedido)
                        }}>
                            Add to Cart
                        </button>
                </div>
            </div>
            <div className='absolute right-2 top-2'>
                <NumberInput 
                    input={input} 
                    onClickUp={ () => {setInput(prev => prev+1)} }
                    onClickDown={ () => setInput(prev => {
                        if(prev <= 1) return prev
                        return prev-1
                    })}
                />
            </div>
        </div>
    )
}