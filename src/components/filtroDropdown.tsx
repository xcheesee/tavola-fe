import { Icon } from '@iconify-icon/react'
import React from 'react'

export default function FiltroDropdown({
    isCollapsed, 
    onClick, 
    children 
}: { 
    isCollapsed: boolean, 
    onClick: () => void, 
    children: React.ReactNode
}) {
    return(
        <>
            <div className="w-full grid">
                <button className="btn justify-self-end my-2" onClick={onClick}>
                    Filtros
                    <div className={`origin-center transition-transform ${isCollapsed? "rotate-180" : ""}`}>
                        <Icon icon={"carbon:chevron-down"}></Icon>
                    </div>
                </button>
            </div>
            <div className={`origin-top animate-dropdown py-4 px-2 rounded-xl col-start-1 col-end-[-1] grid grid-cols-2 gap-x-8 gap-y-4 ${isCollapsed? "": "hidden"}`}>
                {children}
                <div className="justify-self-end col-span-2">
                    <button className="btn self-end">Buscar</button>
                </div>
            </div>
        </>
    )
}