import Link from "next/link";

export default function SubheaderLink({
    href, 
    children
}: {
    href: string;
    children: React.ReactNode | string
}) {
    return (

        <Link href={href}>
            <div className="text-white hover:text-gold-600 font-light">{children}</div>
        </Link>
    )
}