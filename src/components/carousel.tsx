export default function Carousel() {
    const test = 1
    return(
        <div className='relative overflow-x-hidden'>
            <div 
                className={`h-full w-full grid content-center transition-all duration-1000 `}
                style={{transform: `translateX(-${test * 100}%`}}
            >
                <div className='flex h-[600px] -translate-y-8 content-center'>
                    {/*heroVals.map( ele => {
                        return(
                            //<div className='grid justify-center content-center w-screen flex-none content-center'>
                            //    <StyledHero {...ele} />
                            //</div>
                        )
                    })*/}
                </div>
            </div>
                
        </div>

    )
}