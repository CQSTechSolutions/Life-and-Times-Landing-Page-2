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
                    <div className='text-center'>
                        <div className='rounded-xl px-8 py-4'>
                            <p className='text-lg md:text-3xl font-bold text-gray-800 leading-tight mb-4'>
                                Relationships change with time.
                            </p>
                            <p className='text-lg md:text-3xl text-gray-600 leading-relaxed'>
                                What feels easy today might feel different tomorrow. That's life.
                            </p>
                        </div>
                    </div>

                    {/* Second paragraph with emphasis */}
                    <div className='text-center'>
                        <div className='rounded-xl px-8 py-4'>
                            <p className='text-lg font-bold md:text-3xl text-gray-800 leading-tight mb-4'>
                                And when life tests you, a good wedding film becomes your reminder.
                            </p>
                            <p className='text-lg md:text-3xl text-gray-600 leading-relaxed'>
                                It brings you back to where it all started — how you looked at each other, what you promised, what you felt.
                            </p>
                        </div>
                    </div>

                    {/* Highlighted section */}
                    <div className='rounded-2xl px-8 py-4'>
                        <div className='text-center space-y-6'>
                            <p className='text-lg font-bold md:text-3xl text-gray-800 leading-tight mb-4'>
                                This isn't made for reels or likes.
                            </p>
                            <p className='text-lg md:text-3xl text-gray-800 leading-relaxed'>
                                It's made for you — to always remember what you built together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyGoodFilmsMatter; 