'use client'
import { useState } from 'react'
import './style.css'

export default function NumberInput({input, onClickUp, onClickDown}: {input: number, onClickUp: () => void, onClickDown: () => void}) {
    //const [val, setVal] = useState(1)
    return(
        <div className='flex flex-col items-center px-2'>
            <button className='hover:text-gold-600 w-6 relative top-2' onClick={onClickUp}>
                <img src="/chevron-up-solid.svg" alt="" />
            </button>
            <input type="number" readOnly name="" id="" value={input} className='w-6 left-[5px] relative text-2xl text-gold-600 bg-rangoon-50'/>
            <button 
                className='hover:text-gold-600 rotate-180 w-6 relative bottom-2' 
                onClick={onClickDown}
            ><img src="/chevron-up-solid.svg" alt="" /></button>
        </div>
    )
}