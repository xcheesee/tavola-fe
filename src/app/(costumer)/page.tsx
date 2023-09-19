'use client'

import DynamicCounter from '@/components/dynamicCounter'
import Header from '@/components/header'
import StyledHero from '@/components/styledHero'
import { HeroItem } from '@/utils/types'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import '@splidejs/react-splide/css'
import { Eagle_Lake as Almendra } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter, redirect } from 'next/navigation'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    const [test, setTest] = useState(0)
    const router = useRouter()

    useEffect(() => {
        redirect('/dashboard')
    },[])

    const heroVals: HeroItem[] = [
        {
            title: "Deleite-se com o Sabor",
            description: "uma fusão encantadora de ervas e especiarias raras, marinadas nos melhores destilados, e servidas com um toque de mistério. Da primeira mordida até o último pedaco, você será transportado a um reino onde cada sentido é aguçado, cada sabor é uma aventura. Embarque em uma jornada mística com uma única mordida.",
            src: "https://s1.1zoom.me/b5071/951/Fast_food_Hamburger_Buns_French_fries_Vegetables_566270_1920x1080.jpg",
            c2a: "Pedir Agora"
        },
        {
            title: "O Tesouro no Fim da Aventura",
            description: "De banquetes substanciosos a delícias delicadas, nosso cardápio é um testemunho de nossa dedicação à qualidade e inovação. Com uma variedade diversificada de pratos meticulosamente elaborados para atender a todos os paladares, você encontrará uma sinfonia de sabores esperando para serem descobertos.",
            src: "https://e1.pxfuel.com/desktop-wallpaper/617/911/desktop-wallpaper-beer-mug-food-foam-cutting-board-meat-products-churrasco-thumbnail.jpg",
            c2a: "Ver Menu"
        },
        {
            title: "Além da Comida",
            description: "não servimos apenas comida; criamos experiências. Nossa filosofia está enraizada na crença de que uma refeição é mais do que sustento - é uma ponte que conecta culturas, uma tela para a criatividade e uma homenagem à tradição.",
            src: "https://c4.wallpaperflare.com/wallpaper/413/702/427/fantasy-art-pointed-ears-tavern-candles-wallpaper-preview.jpg",
            c2a: "Sobre Nos"
        }
    ]

    useEffect(() => {
        let count = 1
        let last = heroVals.length
        setInterval(() => {
            setTest(count % last)
            count++
        }, 5000)
    }, [])

  return (
    <div className="min-h-screen relative">
            <div className='absolute w-full h-full'>
                <div className='absolute bg-black w-full h-full opacity-50'></div>
                <img src="/mainbg.png" alt="" className='w-full h-full object-fit'/>
            </div>

            <Header />

            <div className='w-full h-[calc(100vh-3.5rem)] grid grid-rows-[max-content_1fr_min-content] pt-16'>
                <div className='relative grid grid-rows-[repeat(2, min-content)] items-center pl-16 pb-28 pt-32'>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-10'>TAVOLA</div>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-10'>REDONDA</div>
                    <div className='absolute left-1/2 -translate-x-1/2 grid self-center content-center w-[300px]'>
                        <img src="./laurel.svg" alt="" className=''/>
                    </div>
                </div>

                <div className='row-start-2 z-10 flex justify-center pt-16 text-center'>
                    <div className='font-serif text-3xl text-gold-50 tracking-widest leading-relaxed'>
                        Onde o passado ganha vida em cada prato
                    </div>
                </div>

                <div className='row-start-3 h-full z-10 grid grid-cols-3 justify-center content-start py-4'>
                    <DynamicCounter 
                        endValue={4823} 
                        icon={<Icon icon={"material-symbols:stars-rounded"} width={50} className='text-gold-600'/>}
                    >
                        Reviews 5 estrelas
                    </DynamicCounter >
                    <DynamicCounter 
                        endValue={339}
                        icon={<Icon icon={"lucide:trophy"} width={50} className='text-gold-600 justify-self-center'/>}
                    >
                        Premios Recebidos
                    </DynamicCounter>
                    <DynamicCounter 
                        endValue={72}
                        icon={<Icon icon={"mdi:food"} width={50} className='text-gold-600 justify-self-center' />}
                    >
                        Menus Diferentes
                    </DynamicCounter>
                </div>

            </div>

    </div>
  )
}
