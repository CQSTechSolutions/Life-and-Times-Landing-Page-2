const CTA1 = () => {
    return (
        <div className='bg-gray-50 flex flex-col h-auto w-screen'>
            {/* Content centered */}
            <div className='flex-1 flex items-center justify-center py-16'>
                <div className='space-y-8 text-center px-4 md:px-8 lg:px-16'>
                    <p className='text-gray-800 text-lg md:text-xl'>
                        At Life and Times, we don't make films that disappear with a swipe. We work with couples who don't just want "coverage," but a memory they can feel again and again.
                    </p>
                    
                    {/* CTA Button */}
                    <button className='p-4 px-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-700 text-white text-lg md:text-2xl font-semibold mt-8'>
                        Get a Custom Quote
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CTA1;