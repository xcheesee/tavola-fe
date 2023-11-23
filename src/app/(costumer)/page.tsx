'use client'

import DynamicCounter from '@/components/dynamicCounter'
import Header from '@/components/header'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { Eagle_Lake as Almendra } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Testemonial from '@/components/testemonial'
import Footer from '@/components/footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        //redirect('/dashboard')
    },[])
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          paritialVisibilityGutter: 10
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          paritialVisibilityGutter: 50
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          paritialVisibilityGutter: 30
        }
      };

  return (
    <>
    <div className="min-h-screen relative">
            <div className='absolute w-full h-[120vh] z-10'>
                <img src="/mainbg3.png" alt="" className='w-full h-full lg:object-fit object-cover'/>
            </div>

            <Header />

            <div className='w-full h-[calc(100vh-3.5rem)] xl:px-[230px] grid grid-rows-[max-content_1fr_min-content] pt-16'>
                <div className='relative grid grid-rows-[repeat(2, min-content)] items-center justify-content-center xl:pl-16 xl:pb-28 xl:pt-32'>
                    <div className='lg:text-5xl text-3xl text-center tracking-[2rem] text-gold-50 z-20'>TAVOLA</div>
                    <div className='lg:text-5xl text-3xl text-center tracking-[2rem] text-gold-50 z-20'>REDONDA</div>
                    <div className='absolute left-1/2 -translate-x-1/2 grid self-center content-center max-w-[300px] z-10'>
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

    <div className='min-h-[80vh] w-full relative grid items-end'>
        <div className='absolute z-30 w-full h-full'>
            <img src="/bg-ratings-2.png" alt="" className='w-full h-full lg:object-fit object-fit'/>
        </div>
        <div className='w-screen pb-28'>
            <Carousel
                infinite
                autoPlay
                deviceType='desktop'
                autoPlaySpeed={5000}
                responsive={responsive}
                arrows
                className='z-40 relative'
            >
                    <Testemonial
                        pfp='/pfp1.png'
                        title="Ragnar Lodbrok"
                        subtitle="Viking"
                    >
                        छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह के दशक में अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.
                    </Testemonial>
                    <Testemonial

                        pfp='/pfp2.jpeg'
                        title="Lagertha"
                        subtitle="Cuié"
                    >
                        Лорем ипсум долор сит амет, еос долор видерер инцидеринт цу, ид сеа нибх оратио аццоммодаре. Доценди евертитур ассентиор ест ат, сеа те аперири модератиус, еа модо инсоленс адолесценс нам.
                    </Testemonial>
                    <Testemonial

                        pfp='/pfp3.jpg'
                        title="Karl Marx"
                        subtitle="Rei do Sexo"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </Testemonial>
            </Carousel>

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
