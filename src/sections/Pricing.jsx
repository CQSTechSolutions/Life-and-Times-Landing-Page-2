import React from 'react';

const Pricing = () => {
    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                    How much does it Cost?
                </h1>
                
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2">
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">₹75,000</span>
                        <span className="text-lg sm:text-xl text-gray-600">starting price</span>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6 mb-8">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            No standard packages, because weddings aren't standard.
                        </p>
                        
                        <div className="h-px bg-gray-200 w-2/3 sm:w-1/2 mx-auto"></div>
                        
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            The final quote depends on:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                        <div className="bg-gray-50 border border-pink-pri rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                            <div className="text-2xl sm:text-3xl mb-3">📅</div>
                            <p className="text-sm sm:text-base text-gray-800 font-medium">Number of days you need us</p>
                        </div>
                        
                        <div className="bg-gray-50 border border-pink-pri rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                            <div className="text-2xl sm:text-3xl mb-3">🎬</div>
                            <p className="text-sm sm:text-base text-gray-800 font-medium">How you want your film told</p>
                        </div>
                        
                        <div className="bg-gray-50 border border-pink-pri rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                            <div className="text-2xl sm:text-3xl mb-3">💝</div>
                            <p className="text-sm sm:text-base text-gray-800 font-medium">The memories you want to keep</p>
                        </div>
                    </div>

                    <button className="w-full sm:w-auto bg-gradient-to-br from-pink-pri to-pink-pri/70 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                        Build Your Custom Quote
                    </button>
                </div>

                <p className="text-base sm:text-lg text-gray-600 italic">
                    Every story is unique. Let's create a package that perfectly fits yours.
                </p>
            </div>
        </div>
    )
}

export default Pricing;