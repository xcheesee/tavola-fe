'use client'
import AutohideToast from "@/components/autohideToast";
import CatalogItemCard from "@/components/catalogItemCard";
import Header from "@/components/header";
import { getAllCategorias } from "@/utils/api/categorias";
import { getAllProdutos } from "@/utils/api/produtos";
import { Categoria, Produto } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Catalog({categorias}: {categorias: Array<Categoria>}) {

    const [selectedCategoria, setSelectedCategoria] = useState<any>("")

    const itens = useQuery({
        queryKey: ['produtos', selectedCategoria],
        queryFn: () => getAllProdutos({categoria: selectedCategoria})
    })

    return(
        <div className="relative bg-rangoon-100 z-10 min-h-screen">

            <div className="relative h-[40vh] w-full ">
                <div className="absolute w-full h-full">
                    <img src="/bg-catalog.png" alt="" className="object-fit w-full h-full"/>
                </div>

                <Header />

                <div className="font-serif text-5xl z-20 relative text-rangoon-100 tracking-[1.5rem] text-center pt-28">MENU</div>

                <div className="w-full flex justify-center absolute bottom-4">
                    <button className="tabs flex">
                        {categorias?.map( (categoria: Categoria, i: number) => 
                            <div 
                                key={`${categoria.nome}${i}`}
                                onClick={() => setSelectedCategoria(categoria.nome)} 
                                className={`border-b-2 text-2xl relative z-10 px-8 ${selectedCategoria == categoria.nome? "border-gold-600 text-gold-600" : "border-rangoon-100 text-rangoon-100 hover:text-gold-500 hover:border-gold-500"} py-2`}
                            >
                                {categoria.nome}
                            </div>)}
                    </button>
                </div>
            </div>

            <div className="">
                <div className="grid items-center justify-center relative h-full">
                    <div className="2xl:w-[1440px] py-16 w-full grid xl:grid-cols-2 grid-flow-row gap-y-16 gap-x-4 justify-items-center">
                        {itens?.data?.map( (item: Produto, i: number) => <CatalogItemCard key={`${item.nome}${i}`} item={item} />)}
                    </div>
                </div>
                <AutohideToast />
            </div>
        </div>
    )
}