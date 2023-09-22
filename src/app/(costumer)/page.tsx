'use client'

import DynamicCounter from '@/components/dynamicCounter'
import Header from '@/components/header'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import '@splidejs/react-splide/css'
import { Eagle_Lake as Almendra } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Testemonial from '@/components/testemonial'

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

            <div className='w-full h-[calc(100vh-3.5rem)] grid grid-rows-[max-content_1fr_min-content] pt-16'>
                <div className='relative grid grid-rows-[repeat(2, min-content)] items-center pl-16 pb-28 pt-32'>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-20'>TAVOLA</div>
                    <div className='text-5xl text-center tracking-[2rem] text-gold-50 z-20'>REDONDA</div>
                    <div className='absolute left-1/2 -translate-x-1/2 grid self-center content-center w-[300px] z-10'>
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

    <div className='grid grid-cols-2 w-full z-30 pt-[300px] relative'>
        <div className='[&>*]:text-end pr-32'>
            <div className=''>
                <div className='text-gold-600 text-5xl font-cursive -mb-8'>Excelencia</div>
                <div className='text-gold-50 text-4xl left-4 relative'>Sobre Nos</div>
            </div>

            <div className='flex justify-end'>
                <div className='text-gold-50 w-[60ch] pt-32 text-lg '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut at magna bibendum, aliquet eros sit amet, ullamcorper erat. 
                Donec elementum imperdiet purus, id efficitur tortor convallis ut. 
                Cras id nisi et enim tempus dignissim. Duis nec dolor ac elit efficitur porta. 
                Ut sit amet leo euismod, luctus urna sed, consectetur lacus. 
                </div>
            </div>
        </div>

        <div className='h-full w-full'>
            <img src="./abtimg.png" alt="" className='object-cover'/>
        </div>

    </div>

    <div className='min-h-[80vh] w-full relative'>
        <div className='absolute z-30 w-full h-full'>
            <img src="./bg-ratings-2.png" alt="" className='w-full h-full object-fit'/>
        </div>

        <div className='grid h-full w-full content-end pb-16'>
            <Testemonial />
        </div>
    </div>

    <div className='z-30 bg-rangoon-950 py-8'>
        <div className='grid grid-rows-[min-content_1fr_min-content] justify-center gap-8 '>
            <div className=''>
                <div className='font-cursive relative -mb-8 -left-16 text-center text-4xl text-gold-600'>Asgard</div>
                <div className='text-center text-3xl text-gold-50 z-30 relative'>Localizacao</div>
            </div>

            <div className='grid justify-center h-full'>
                <iframe
                  width="1000"
                  height="450"
                  style={{border:0}}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYW_f8OGyYraaUmQfM9sYPNC_U2MSHp0E
                    &q=Cannabis+Museum+Amsterdam">
                </iframe>
            </div>

            <div className='justify-self-center text-white text-center text-3xl font-serif tracking-widest'>
                <div>Rua Fulano de Tal, Sem Número</div>
                <div>Paraisópolis, São Paulo</div>
            </div>
        </div>
    </div>

    <footer className='h-[30vh] z-30 bg-black'>
        <div className='grid grid-cols-3 px-32 py-16'>
            <div className=''>
                <div className='font-bold text-white pb-4'>Funcionamento</div>
                <div className='text-rangoon-900'>
                    <div>Segunda a Sabado: 09:00h as 21:00h</div>
                    <div>Domingo: 11:00h as 23:00h</div>
                    <div>Feriado: 12:00h as 23:00h</div>
                </div>
            </div>

            <div className='justify-self-center'>
                <div className='font-bold text-white pb-4'>Atendimento ao Cliente</div>
                <div className='text-rangoon-900 [&>*]:'>
                    <div className='hover:text-gold-600'>Sobre Nos</div>
                    <div className='hover:text-gold-600'>Reservas</div>
                    <div className='hover:text-gold-600'>Delivery</div>
                    <div className='hover:text-gold-600'>Cardapio</div>
                    <div className='hover:text-gold-600'>Informacoes Nutricionais</div>

                </div>
            </div>

            <div className='justify-self-end'>
                <div className='font-bold text-white pb-4 '>Contato Comercial</div>
                <div className='text-rangoon-900'>
                    <div>email: welive@welove.welie</div>
                    <div>telefone: (11)99893-3922</div>
                </div>
            </div>

            <div className='self-end absolute bottom-0 justify-self-center col-span-3 text-rangoon-900 py-4'>© ШАЙЛУШАЙ LLC, Lybia</div>
        </div>
    </footer>

    <div className='fixed w-full h-full'>
        <img src="/bg4.png" className='absolute w-full h-full object-fixed' />
    </div>
    </>
  )
}
