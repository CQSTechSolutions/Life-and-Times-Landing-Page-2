// ToDo: add 7 as image from publlic whatsapp-feedback.jpg
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            quote: "Our wedding film didn't just show what happened. It showed how it felt.",
            name: "Sarah & Michael",
            location: "New York",
            type: "text"
        },
        {
            id: 2,
            quote: "It's the only video I've watched so many times and still tear up.",
            name: "Emma & James", 
            location: "California",
            type: "text"
        },
        {
            id: 3,
            quote: "Even my dad cried. That says everything.",
            name: "Jessica & David",
            location: "Texas",
            type: "text"
        },
        {
            id: 4,
            quote: "The cinematography was breathtaking. Every frame was pure art.",
            name: "Ashley & Robert",
            location: "Florida",
            type: "text"
        },
        {
            id: 5,
            quote: "They captured moments we didn't even know happened. Pure magic.",
            name: "Maria & Alex",
            location: "Colorado",
            type: "text"
        },
        {
            id: 6,
            quote: "Professional, creative, and absolutely stunning results. Highly recommend!",
            name: "Rachel & Thomas",
            location: "Oregon",
            type: "text"
        },
        {
            id: 7,
            image: "/whatsapp-feedback.jpg",
            name: "",
            location: "",
            type: "image"
        },
        {
            id: 8,
            image: "/whatsapp-feedback1.jpg",
            name: "",
            location: "",
            type: "image"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotation effect
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 2000); // 2 seconds
        }

        return () => clearInterval(interval);
    }, [testimonials.length, isPaused]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating);
    };

    const currentTestimonial = testimonials[currentIndex];

    return(
        <div className="relative min-h-screen w-screen flex items-center justify-center py-8 sm:py-12 md:py-16 px-2 sm:px-4 overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/Copy of 8.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="max-w-4xl w-full relative z-20">
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-2 sm:mb-4">
                        What Other Couples Say
                    </h2>
                </div>

                <div className="relative">
                    {/* Main testimonial card */}
                    <div 
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-8 md:p-12 mx-2 sm:mx-4 md:mx-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex flex-col justify-center transition-all duration-500 ease-in-out transform"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="text-center">
                            {/* Conditional rendering based on testimonial type */}
                            {currentTestimonial.type === "image" ? (
                                // Image testimonial - Full image only
                                <div className="w-full h-full flex items-center justify-center sm:-m-8 md:-m-12">
                                    <img 
                                        src={currentTestimonial.image}
                                        alt="WhatsApp feedback from clients"
                                        className="w-full h-full object-contain rounded-xl mx-auto object-cover"
                                    />
                                </div>
                            ) : (
                                // Text testimonial
                                <>
                                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-4 sm:mb-6 md:mb-8 italic">
                                        "{currentTestimonial.quote}"
                                    </blockquote>

                                    {/* Author info */}
                                    <div className="border-t border-gray-200 pt-3 sm:pt-4 md:pt-6">
                                        <p className="text-base sm:text-lg font-semibold text-gray-900">
                                            {currentTestimonial.name}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-500">
                                            {currentTestimonial.location}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Left arrow - Hidden on mobile */}
                    <button
                        onClick={goToPrevious}
                        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right arrow - Hidden on mobile */}
                    <button
                        onClick={goToNext}
                        className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                                index === currentIndex 
                                    ? 'bg-white scale-110' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;