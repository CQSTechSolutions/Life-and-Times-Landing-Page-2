import React from 'react';

const Intro = () => {
    return(
        <div className='bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24'>
            <div className='max-w-7xl mx-auto text-center'>
                {/* Main heading */}
                <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                    <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-6xl mx-auto px-2'>
                        THE <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700'>PROBLEM</span> MOST COUPLES FACE
                    </h1>
                    <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight'>
                    </h2>
                </div>

                {/* Decorative divider */}
                <div className='flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                    <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-16 sm:max-w-24 md:max-w-32 lg:max-w-40'></div>
                    <div className='mx-3 sm:mx-4 md:mx-6 lg:mx-8 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-lg'></div>
                    <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-16 sm:max-w-24 md:max-w-32 lg:max-w-40'></div>
                </div>

                {/* Story section */}
                <div className='space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 leading-relaxed max-w-5xl mx-auto px-4'>
                        Most wedding videos are forgotten after a few weeks.
                    </p>
                    
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 font-light'>
                        They feel rushed. Generic. Like thousands of others.
                    </p>
                </div>

                {/* Call to action section */}
                <div className='bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 max-w-4xl mx-auto shadow-2xl relative overflow-hidden'>
                    {/* Background pattern */}
                    <div className='absolute inset-0 opacity-10'>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12'></div>
                    </div>
                    
                    <div className='relative z-10 space-y-4 sm:space-y-6 md:space-y-8'>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-relaxed max-w-3xl mx-auto px-2'>
                            You deserve a film that still moves you even 10 years later.
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold text-pink-100'>That's what we do.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;