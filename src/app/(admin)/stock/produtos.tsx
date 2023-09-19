'use client'

import { AddCategoryModal } from '@/components/modals'
import FiltroDropdown from '@/components/filtroDropdown'
import ProdutoTable from '@/components/produtoTable'
import { getAllProdutos } from '@/utils/api'
import { Icon } from '@iconify-icon/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'

export default function Produtos() {
    const {data} = useQuery({
        queryKey: ['produtos'],
        queryFn: getAllProdutos,
    })

    const categoryModalId = "category-modal"

    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <>
            <div className="justify-self-start self-center flex gap-4"> 
              <Link href={"/stock/new"}>
                <button className="btn">
                    <Icon icon={"ph:plus-fill"} width={24} />
                    Adicionar
                </button>
              </Link>
              <button className='btn' onClick={() => {
                const categoryModal = document.getElementById(categoryModalId) as HTMLDialogElement
                categoryModal.showModal()
              }}>
                    <Icon icon={"ic:baseline-add-circle"} width={24} />
                    Adicionar Categoria
                    </button>
            </div>
            <FiltroDropdown
                isCollapsed={isCollapsed}
                onClick={() => setIsCollapsed(prev => !prev)}
            >
                <input type="text" placeholder="Codigo" className="input input-bordered"/>
                <input type="text" placeholder="Nome" className="input input-bordered"/>
                <input type="text" placeholder="Quantidade" className="input input-bordered"/>
            </FiltroDropdown>

            <ProdutoTable produtos={data} />

            <AddCategoryModal modalId={categoryModalId} />
        </>
    )
}