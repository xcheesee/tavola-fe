export default function Testemonial({
    pfp,
    children,
    title,
    subtitle
}:{
    pfp?: string
    children: React.ReactNode,
    title: string,
    subtitle: string
}) {
    return(
        <div className="grid xl:grid-cols-[max-content_1fr] z-40 py-8 items-center justify-content-center xl:px-[260px]">
            <div className="relative py-8 max-xl:justify-self-center max-xl:mt-24">
                <div className="relative w-[220px] h-[220px]">
                    <div className="rounded-full w-[200px] h-[200px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  absolute overflow-hidden">
                        <img src={pfp} alt="" className="object-fill w-full h-full"/>
                    </div>

                    <div className="rounded-full border-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-gold-500 w-full h-full absolute"> </div>
                </div>

                <div className="text-center text-lg text-gold-50 pt-4"><span className="font-bold">{title}</span>, {subtitle}</div>
            </div>

            <div className="grid grid-cols-[min-content_minmax(200px,800px)_min-content] justify-center">
                <div className="w-[50px] xl:ml-8 mr-4">
                    <img src="/aspas-ab.svg" alt="" />
                </div>

                <div className="py-8 font-serif text-xl text-gold-50 xl:px-8">{children}</div>

                <div className="w-[50px] self-end xl:mr-8 ml-4">
                    <img src="/aspas-fc.svg" alt="" />
                </div>

            </div>
        </div>
    )
}