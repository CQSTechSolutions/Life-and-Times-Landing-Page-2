import React from 'react';

const WhatWeOffer = () => {
    const offerings = [
        "Complete Wedding Photography",
        "Wedding-Films"
    ];

    const notincluded = [
        "Pre-Wedding Shoot",
        "Wedding Albums", 
        "Travel and Stay of the team (If outside Delhi)"
    ]

    return (
        <div className="mb-12 sm:mb-16 lg:mb-20">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-12 p-4">
                <h2 className="uppercase text-5xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 font-league">
                    What you <span className='text-pink-500'>get</span>
                </h2>
            </div>
            
            {/* Services List */}
            <div className="max-w-4xl mx-auto font-poppins">
                <div className="space-y-2">
                    {offerings.map((offering, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 sm:space-x-6 group hover:bg-pink-50 transition-all duration-300 rounded-xl px-4 sm:p-6"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-50 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                                <span className="text-xl sm:text-2xl">
                                    {index === 0 ? "📸" : "🎬"}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl sm:text-xl lg:text-2xl text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                                    {offering}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Not Included */}
            <div className="text-center mb-6 sm:mb-12 p-4 mt-12">
                <h2 className="uppercase text-5xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 font-league">
                    What's <span className='text-pink-500'>Not</span> Included
                </h2>
            </div>

            <div className="max-w-4xl mx-auto font-poppins">
                <div className="space-y-2">
                    {notincluded.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 sm:space-x-6 group hover:bg-pink-50 transition-all duration-300 rounded-xl px-4 sm:p-6"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-50 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                                <span className="text-xl sm:text-2xl">
                                    {index === 0 ? "📸" : "🎬"}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl sm:text-xl lg:text-2xl text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                                    {item}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;