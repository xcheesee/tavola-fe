'use client'

import DynamicCounter from '@/components/dynamicCounter'
import Header from '@/components/header'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import '@splidejs/react-splide/css'
import { Eagle_Lake as Almendra } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Testemonial from '@/components/testemonial'
import Footer from '@/components/footer'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        //redirect('/dashboard')
    },[])

  return (
    <>
    <div className="min-h-screen relative">
            <div className='absolute w-full h-[120vh] z-10'>
                <img src="/mainbg3.png" alt="" className='w-full h-full object-fit '/>
            </div>

            <Header />

            <div className='w-full h-[calc(100vh-3.5rem)] xl:px-[230px] grid grid-rows-[max-content_1fr_min-content] pt-16'>
                <div className='relative grid grid-rows-[repeat(2, min-content)] items-center xl:pl-16 xl:pb-28 xl:pt-32'>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-20'>TAVOLA</div>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-20'>REDONDA</div>
                    <div className='absolute left-1/2 -translate-x-1/2 grid self-center content-center w-[300px] z-10'>
                        <img src="/laurel.svg" alt="" className=''/>
                    </div>
                </div>

                <div className='row-start-2 z-10 flex justify-center pt-16 text-center'>
                    <div className='font-serif text-3xl text-gold-50 tracking-widest leading-relaxed'>
                        Onde o passado ganha vida em cada prato
                    </div>
                </div>

                <div className='row-start-3 h-full z-10 grid xl:grid-cols-3 justify-center content-start py-4'>
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

    <div className='grid xl:grid-cols-2 w-full z-30 xl:pt-[300px] pt-44 xl:px-[230px] relative' id='about'>
        <div className='[&>*]:xl:text-end text-center xl:pr-32 '>
            <div className=''>
                <div className='text-gold-600 text-5xl font-cursive -mb-8'>Excelencia</div>
                <div className='text-gold-50 text-3xl xl:left-4 relative'>Sobre Nos</div>
            </div>

            <div className='flex xl:justify-end justify-center max-xl:pb-16'>
                <div className='text-gold-50 md:w-[60ch] xl:pt-32 pt-12 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut at magna bibendum, aliquet eros sit amet, ullamcorper erat. 
                Donec elementum imperdiet purus, id efficitur tortor convallis ut. 
                Cras id nisi et enim tempus dignissim. Duis nec dolor ac elit efficitur porta. 
                Ut sit amet leo euismod, luctus urna sed, consectetur lacus. 
                </div>
            </div>
        </div>

        <div className='h-full w-full max-xl:justify-self-center'>
            <img src="/abtimg.png" alt="" className='w-full h-full object-fit'/>
        </div>

    </div>

    <div className='min-h-[80vh] w-full relative'>
        <div className='absolute z-30 w-full h-full'>
            <img src="/bg-ratings-2.png" alt="" className='w-full h-full object-fit'/>
        </div>

        <div className='grid h-full w-full content-end pb-16'>
            <Testemonial />
        </div>
    </div>

    <div className='z-30 bg-rangoon-950 py-8' id='loc'>
        <div className='grid grid-rows-[min-content_1fr_min-content] justify-center gap-8 '>
            <div className=''>
                <div className='font-cursive relative -mb-8 -left-16 text-center text-4xl text-gold-600'>Asgard</div>
                <div className='text-center text-3xl text-gold-50 z-30 relative'>Localizacao</div>
            </div>

            <div className='grid justify-center h-full w-full relative'>
                <iframe
                  style={{border:0}}
                  loading="lazy"
                  className='xl:w-[1000px] h-[450px] md:w-[700px] md:h-[450px] sm:w-[350px]'
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYW_f8OGyYraaUmQfM9sYPNC_U2MSHp0E
                    &q=Cannabis+Museum+Amsterdam">
                </iframe>
            </div>

            <div className='justify-self-center flex flex-col font-bold text-gold-700 text-white text-center text-3xl tracking-widest'>
                <div>Rua Fulano de Tal, Sem Número</div>
                <div>Paraisópolis, São Paulo</div>
            </div>
        </div>
    </div>

    <Footer />

    <div className='fixed w-full h-full'>
        <img src="/bg4.png" className='absolute w-full h-full object-fixed' />
    </div>
    </>
  )
}
