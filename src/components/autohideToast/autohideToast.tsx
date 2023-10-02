'use client'
import { toastAtom } from "@/utils/atomStore";
import { useAtom } from "jotai";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";

export default function AutohideToast({
    //open, 
    //message, 
    duration=6000, 
    severity="alert-success"
}: {
    //open: boolean, 
    //message: string, 
    duration?: number, 
    severity?: 'alert-success' | 'alert-warning' | 'alert-error'
}) {
    const [toast, setToast] = useAtom(toastAtom)

    useEffect(() => {
        const timeout = setTimeout(() => setToast(prev => ({...prev, open: false})), duration)
        return () => clearTimeout(timeout) 
    }, [toast])

    if(!toast.open) return <></>

    return (
        <div className="toast toast-start">
            <div className="alert alert-success">
                <span>{toast.message}</span>
            </div>
        </div>         
    )
}