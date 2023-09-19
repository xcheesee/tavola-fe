'use client'
import { Icon } from "@iconify-icon/react";
import { useState, useEffect, useRef } from 'react'
import { CountUp } from "countup.js";

export default function DynamicCounter({
    endValue,
    icon,
    children
}: {
    endValue: number,
    icon: React.ReactElement,
    children: React.ReactElement | string

}) {
    const counterRef = useRef(null)
    useEffect(() => {
        initCounter()
    }, [])

    async function initCounter() {
        const countAnim = new CountUp(counterRef.current as unknown as HTMLElement, endValue, {
            separator: "",
            startVal: 0,
            duration: 10
        })
        if(!countAnim.error) {
            countAnim.start()
        } else {
            console.error(countAnim.error)
        }

    }

    
    return(
        <div className="grid grid-rows-[repeat(3,min-content)] gap-4 text-white content-center justify-content-center text-center">
            <div>
                {icon}
            </div>
            <div ref={counterRef} className="text-3xl font-bold text-gold-600"></div>
            <div className="font-bold text-lg">
                { children }
            </div>
        </div>
    )
}