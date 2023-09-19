import { Icon } from '@iconify-icon/react'
import Link from 'next/link'
import React from 'react'

export default function SidebarItem({ icon, children, href }: { icon: string, children: React.ReactNode, href: string}) {
    return(
        <Link href={href}>
            <div className="flex gap-4 items-end text-lg">
                <Icon icon={icon} height={28} width={28}/>
                {children}
            </div>
        </Link>
    )
}