import React from 'react';

const WhyGoodFilmsMatter = () => {
    return (
        <div className='bg-gray-100 py-10 px-4'>
            <div className='max-w-4xl mx-auto'>
                {/* Heading */}
                <div className='text-center mb-5'>
                    <h2 className='uppercase text-6xl md:text-5xl text-gray-900 font-league'>
                        Why Are We <span className='bg-gradient-to-br from-pink-300 via-pink-600 to-pink-700 bg-clip-text text-transparent'>Doing This?</span>
                    </h2>
                </div>

                {/* Content */}
                <div className='space-y-2 font-poppins'>
                    {/* First paragraph */}
                    <p className='text-center'>We're relaunching our wedding photography services after a 3-year break. And to restart strong, this is our way to pace up again, build trust, and reconnect with the work. This is not a discount or a scheme — just an early bird offer.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyGoodFilmsMatter; 