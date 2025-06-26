import React from 'react';

const TruthSection = () => {
    return (
        <div className='bg-white flex flex-col h-auto w-screen'>

            {/* Content centered */}
            <div className='flex-1 flex items-center justify-center py-16'>
                <div className='space-y-2 text-center px-4 md:px-8 lg:px-16'>
                    {/* heading */}
                    <h2 className=' text-2xl font-bold'>
                        The part nobody tells couples
                    </h2>

                    {/* description */}
                    <p className='p-6 rounded-lg  text-md flex justify-center items-center text-center'>
                        Many couples don't understand what they should expect from wedding photography. So they end up discussing "candid", "cinematic", "traditional"photography in form of packages with photographers.
                    </p>
                    <p className='p-6 rounded-lg  text-lg flex justify-center items-center text-center font-bold'>
                        But ask yourself — what really matters?
                    </p>
                    <p className='px-6 rounded-lg  text-lg flex justify-center items-center text-center'>
                        Few photo packages? 
                    </p>
                    <p className='px-6 rounded-lg  text-lg flex justify-center items-center text-center'>
                        Or capturing the emotions, the foundation, the story of your relationship as it truly begins? 
                    </p>
                    <p className='px-6 rounded-lg  text-lg flex justify-center items-center text-center'>
                        If it's the second — if you care about preserving what brought you together — then only a real wedding film can do that.
                    </p>

                    <div className='bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden'>
                        {/* Background pattern */}
                        <div className='absolute inset-0 opacity-10'>
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12'></div>
                        </div>

                        <div className='relative z-10 space-y-6 sm:space-y-8 md:space-y-10'>
                            <p className='font-bold text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white max-w-4xl'>
                                Good Wedding-Films can save marriages.
                            </p>
                            <p className='text-sm sm:text-lg md:text-xl text-white'>Read it again if it didn't click you at once.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TruthSection; 