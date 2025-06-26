import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            icon: "📱",
            number: "1",
            title: "You Get in Touch",
            description: "Fill the form. We'll chat, understand your wedding plans, and check availability."
        },
        {
            icon: "📅",
            number: "2",
            title: "We Lock the Dates",
            description: "If we're a good match, we confirm the booking with a standard advance and a signed MoU agreement."
        },
        {
            icon: "📸",
            number: "3",
            title: "We Shoot Your Wedding",
            description: "You get full photography + a cinematic wedding film — just like any premium client would."
        },
        {
            icon: "💝",
            number: "4",
            title: "We Deliver Everything",
            description: "Final photos, film, and memories — crafted with love and detail."
        },
        {
            icon: "💰",
            number: "5",
            title: "You Get 100% Cashback",
            description: "Within one year of your final payment, we send you your full cashback. No conditions. No compromise."
        }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-6xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-league text-gray-900 mb-4 sm:mb-6">
                        HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">WORKS</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our simple, transparent 5-step process to get your wedding photography for free
                    </p>
                </div>

                {/* Steps Section */}
                <div className="mb-16 sm:mb-20 lg:mb-24 font-poppins">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-pink-200 hover:border-pink-400 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-100 to-pink-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <div className="flex items-center space-x-1">
                                                <span className="text-2xl">{step.icon}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors duration-300 mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 