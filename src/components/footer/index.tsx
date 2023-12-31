export default function Footer() {
    return(
        <footer className='grid md:grid-cols-3 max-xl:px-8 pt-8 min-h-[30vh] z-30 bg-black xl:px-[230px] '>
            <div className='flex flex-col gap-4'>
                <div className='font-bold text-white '>Funcionamento</div>
                <div className='text-rangoon-900'>
                    <div>Segunda a Sabado: 09:00h as 21:00h</div>
                    <div>Domingo: 11:00h as 23:00h</div>
                    <div>Feriado: 12:00h as 23:00h</div>
                </div>
            </div>

            <div className='justify-self-center flex flex-col gap-4 max-md:hidden'>
                <div className='font-bold text-white'>Atendimento ao Cliente</div>
                <div className='text-rangoon-900 text-center'>
                    <div className='hover:text-gold-600'>Sobre Nos</div>
                    <div className='hover:text-gold-600'>Reservas</div>
                    <div className='hover:text-gold-600'>Delivery</div>
                    <div className='hover:text-gold-600'>Cardapio</div>
                    <div className='hover:text-gold-600'>Informacoes Nutricionais</div>
                </div>
            </div>

            <div className='justify-self-end flex flex-col gap-4 text-end max-md:hidden'>
                <div className='font-bold text-white'>Contato Comercial</div>
                <div className='text-rangoon-900'>
                    <div>email: welive@welove.welie</div>
                    <div>telefone: (11)99893-3922</div>
                </div>
            </div>

            <div className='self-end absolute bottom-0 justify-self-center col-span-3 text-rangoon-900 pt-4'>© ШАЙЛУШАЙ LLC, Lybia</div>
        </footer>
    )
}