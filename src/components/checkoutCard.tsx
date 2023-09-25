export default function CheckoutCard() {
    return (
        <div className="bg-rangoon-50 rounded-xl shadow-2xl w-full h-[400px] py-8 flex flex-col px-4 [&>*]:text-rangoon-800 sticky top-16">
            <div className="self-center pb-4 text-3xl">SUMMARY</div>

            <div className="border-b-2 my-2 border-rangoon-800 flex justify-between">
                <div>Subtotal</div>
                <div>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(23.99)}</div>
            </div>

            <div className="border-b-2 my-2 border-rangoon-800 flex justify-between">
                <div>Taxas</div>
                <div>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(0)}</div>
            </div>

            <div className="border-b-2 my-2 border-rangoon-800 flex justify-between">
                <div>Delivery</div>
                <div>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(4.99)}</div>
            </div>

            <div className="border-b-2 border-rangoon-800 flex justify-between mt-auto mb-8">
                <div className="self-end">Total</div>
                <div className="text-3xl text-gold-500">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(28.98)}</div>
            </div>
            <button className="btn bg-gold-500 font-bold border-gold-500 text-xl hover:text-rangoon-100">CHECKOUT</button>
        </div>
    )
}