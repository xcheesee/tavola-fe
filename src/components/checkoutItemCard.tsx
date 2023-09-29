'use client'
import { pedidoAtom } from '@/utils/atomStore'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { PedidoItem, Produto } from '@/utils/types'
import NumberInput from './numberInput'
import { Icon } from '@iconify-icon/react'

export default function CheckoutItemCard({item, qtd}: {item: Produto, qtd?: number}) {
    const [input, setInput] = useState(qtd ?? 1)
    const [pedido, setPedido] = useAtom(pedidoAtom)

    return(
        <div className='grid lg:grid-cols-[max-content_1fr] bg-rangoon-50 rounded-xl min-h-[200px] lg:min-w-[600px] max-w-[700px] shadow-2xl relative'>
            <div className='lg:w-[200px] max-lg:w-2/3 max-lg:mt-4 h-[170px] rounded-lg relative mx-4 self-center max-lg:justify-self-center overflow-hidden'>
                <img src="/abtimg.png" alt="" className='object-fill w-full h-full'/>
            </div>
            <div className='grid grid-rows-[min-content_1fr_min-content] max-lg:justify-items-center my-4 ml-4'>
                <div className='text-3xl font-light tracking-[0.5rem] text-rangoon-800'>{item.nome}</div>
                <div className='text-rangoon-400 text-md lg:mr-8 py-8 max-lg:w-[20ch]'>{item.descricao}</div>
                <div className='grid grid-cols-[1fr_max-content] justify-between items-center pr-4'>
                    <div className='font-light text-2xl text-rangoon-800 pr-4'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.valor * input)}</div>
                    <button 
                        className='btn bg-red-500 justify-self-end ml-8'
                        onClick={() => {
                            setPedido(prev => {
                                const newPedido:{[key:string]: PedidoItem} = {}
                                Object.entries(prev)
                                    .filter( keyVal => +keyVal[0] !== item.id)
                                    .forEach( keyVal => { newPedido[keyVal[0]]=  keyVal[1] } )
                                return newPedido 
                            })
                        }}
                    >
                        <Icon icon='mdi:trash' width={28} className='text-white'/>
                        </button>
                </div>
            </div>
            <div className='absolute right-2 top-2'>
                <NumberInput 
                    input={input} 
                    onClickUp={ () => {
                        setInput(prevInput => {
                            setPedido(prev => ({...prev, [item.id]: {
                                produto: item,
                                qtd: prevInput+1
                            }}))    
                            return prevInput+1
                        })
                    } }
                    onClickDown={ () => setInput(prevInput => {
                        if(prevInput <= 1) return prevInput
                            setPedido(prev => ({...prev, [item.id]: {
                               produto: item,
                               qtd: prevInput-1
                           }}))    
                        return prevInput-1
                    })}
                />
            </div>
        </div>
    )
}