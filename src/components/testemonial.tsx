export default function Testemonial() {
    return(
        <div className="grid grid-cols-[400px_1fr] z-40 py-8">
            <div className="justify-self-center relative">
                <div className="rounded-full w-[300px] h-[300px] my-8 relative overflow-hidden">
                    <img src="pfp1.png" alt="" className="object-fill w-full h-full"/>
                </div>

                <div className="rounded-full border-4 border-gold-600 w-[320px] h-[320px] absolute top-1/2 -left-[10px] -translate-y-[54%]"> </div>

                <div className="text-center text-lg"><span className="font-bold">Ragnar Lodbrok</span>, Viking</div>
            </div>

            <div className="px-8 grid grid-cols-[min-content_minmax(200px,800px)_min-content] grid-rows-[min-content_1fr]">
                <div className="col-span-3 font-bold text-rangoon-900 text-2xl py-8">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!</div>
                <div className="w-[50px] ml-16">
                    <img src="./aspas-ab.svg" alt="" />
                </div>

                <div className="py-8 font-serif text-rangoon-900 text-2xl">छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह के दशक में अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.</div>

                <div className="w-[50px] self-end ml-8">
                    <img src="./aspas-fc.svg" alt="" />
                </div>

            </div>
        </div>
    )
}