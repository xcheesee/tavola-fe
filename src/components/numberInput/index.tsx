'use client'
import { useState } from 'react'
import './style.css'

export default function NumberInput() {
    const [val, setVal] = useState(1)
    return(
        <div className='flex flex-col items-center px-2'>
            <button className='hover:text-gold-600 w-6 relative top-2' onClick={() => setVal(prev => prev + 1 )}>
                <img src="./chevron-up-solid.svg" alt="" />
            </button>
            <input type="number" name="" id="" value={val} className='w-6 left-[5px] relative text-2xl text-gold-600 bg-rangoon-50'/>
            <button 
                className='hover:text-gold-600 rotate-180 w-6 relative bottom-2' 
                onClick={() => setVal(prev => {
                    if(prev <= 1) return prev
                    return prev-1
                })}
            ><img src="./chevron-up-solid.svg" alt="" /></button>
        </div>
    )
}