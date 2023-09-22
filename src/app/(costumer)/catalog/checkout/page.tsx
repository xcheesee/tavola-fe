import Header from "@/components/header";

export default function Page() {
    return(<div className="relative z-10 min-h-screen bg-rangoon-100">
            <div className="absolute h-[40vh] w-full ">
                <img src="../bg-catalog.png" alt="" className="object-fit w-full h-full"/>
            </div>
            <Header />
            <div className="font-serif text-5xl z-20 relative text-rangoon-100 tracking-[1.5rem] text-center pt-28">CHECKOUT</div>
        </div>
    )
}