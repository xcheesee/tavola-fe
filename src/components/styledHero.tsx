import { Eagle_Lake as Almendra } from 'next/font/google'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})

export default function StyledHero({
    title,
    description,
    src,
    c2a,
}: {
    title: string,
    description: string,
    src: string,
    c2a: string,
}) {
    return(
        <div className="hero-content h-[600px] relative rounded-xl flex-col lg:flex-row-reverse">
            <div className='absolute h-full w-full'>
                <img src="/papiro3.png" alt="" className='w-full h-full object-fill' />
            </div>

            <div className='flex-[2_2_0%] z-10 pr-16 py-16 w-full h-full'>
                <img src={src} className="rounded-lg shadow-2xl h-full w-full object-fill" />
            </div>
            <div className='self-center flex-1 text-slate-900 z-10 pl-16 py-8'>
                <h1 className={`text-5xl font-bold ${almendra.className}`}>{title}</h1>
                <p className="py-6 font-serif text-lg">{description}</p>
                <button className="btn bg-yellow-950 text-neutral-200">{c2a}</button>
            </div>
        </div>
    )
}