export default function Testemonial() {
    return(
        <div className="grid grid-cols-[max-content_1fr] z-40 py-8 items-center justify-content-center px-[260px]">
            <div className="relative py-8">
                <div className="relative w-[220px] h-[220px]">
                    <div className="rounded-full w-[200px] h-[200px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  absolute overflow-hidden">
                        <img src="pfp1.png" alt="" className="object-fill w-full h-full"/>
                    </div>

                    <div className="rounded-full border-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-gold-500 w-full h-full absolute"> </div>
                </div>

                <div className="text-center text-lg text-gold-50 pt-4"><span className="font-bold">Ragnar Lodbrok</span>, Viking</div>
            </div>

            <div className="grid grid-cols-[min-content_minmax(200px,800px)_min-content] justify-center">
                <div className="w-[50px] ml-8">
                    <img src="./aspas-ab.svg" alt="" />
                </div>

                <div className="py-8 font-serif text-2xl text-gold-50 px-8">छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह के दशक में अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.</div>

                <div className="w-[50px] self-end mr-8">
                    <img src="./aspas-fc.svg" alt="" />
                </div>

            </div>
        </div>
    )
}