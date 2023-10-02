'use client'

import AutohideToast from '@/components/autohideToast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export default function Providers({ children }: { children: React.ReactNode}) {
    const [queryClient] = React.useState(() => new QueryClient())
    
    return (
        <QueryClientProvider client={queryClient}>
            <ToastProvider>
                { children }
            </ToastProvider>
        </QueryClientProvider>
    )
}

function ToastProvider({ children }: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
   
}