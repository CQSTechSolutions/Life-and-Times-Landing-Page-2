import React from 'react';

const AskSection = () => {
    return (
        <div style={{
                backgroundImage: 'url("/Copy of 3.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'}} className='relative bg-fixed bg-cover flex flex-col min-h-screen w-screen'>
            {/* black overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            
            {/* Content centered */}
            <div className='flex-1 flex items-center justify-center'>
                <div className='text-center z-10 px-4 md:px-8 lg:px-16'>
                    <div className='space-y-3'>
                        <h2 className='text-white text-xl md:text-2xl font-semibold'>
                            But ask yourself — what really matters?
                        </h2>
                        <h3 className='text-white text-lg md:text-xl font-semibold'>
                            A photography package that is treated like a deal?
                        </h3>
                        <div className='bg-gradient-to-br from-pink-400 to-pink-700 text-transparent bg-clip-text text-2xl md:text-xl font-bold'>
                            Or
                        </div>
                        <h3 className='text-white text-lg md:text-xl font-semibold'>
                            preserving the foundation of your story - what brought you together!
                        </h3>
                        <div className='bg-gradient-to-br from-pink-400 to-pink-700 text-transparent bg-clip-text text-xl md:text-2xl font-bold mt-8'>
                            Good wedding-films can do that!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskSection;