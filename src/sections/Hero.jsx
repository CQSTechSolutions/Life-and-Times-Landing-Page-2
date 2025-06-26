import React from 'react';

const Hero = () => {
    return(
        <>
            {/* Hero Section */}
            <div style={{
                backgroundImage: 'url("/Copy of 8.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }} className='relative bg-fixed bg-cover flex flex-col h-screen w-screen'>
                {/* black overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                
                {/* Logo at top
                <div className='z-10 py-4 flex justify-center bg-black'>
                    <img 
                        src="/life_and_times(White Logo).webp" 
                        alt="Hero" 
                        className='w-[30vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]'
                    />
                </div> */}

                {/* Content centered */}
                <div className='flex-1 flex items-center justify-center'>
                    <div className='text-center z-10 px-4 md:px-8 lg:px-16'>
                        <h2 className='text-white text-6xl tracking-wide uppercase font-league'>
                            Get your wedding photography done for <span className='text-pink-500 font-semibold bg-clip-text'>FREE</span>.
                        </h2>
                        <p className='text-white text-lg font-poppins'>Sounds unbelievable, right? But it's true.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;