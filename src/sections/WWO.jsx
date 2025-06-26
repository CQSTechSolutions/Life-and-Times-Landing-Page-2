import React from 'react';
import WYG from "./WYG.jsx";
import Testimonials from './Testimonials';

const WWO = () => {
    // const coreServices = [
    //     {
    //         icon: "📸",
    //         title: "Wedding Photography",
    //         description: "Candid + Portraits",
    //         details: "Capturing every emotion and moment as it naturally unfolds"
    //     },
    //     {
    //         icon: "🎞️",
    //         title: "Wedding Trailer",
    //         description: "Highlight Reel",
    //         details: "A perfect teaser of your special day to share with everyone"
    //     },
    //     {
    //         icon: "📕",
    //         title: "Printed Wedding Album",
    //         description: "Premium Quality",
    //         details: "Beautiful physical keepsake to treasure forever"
    //     },
    //     {
    //         icon: "🎥",
    //         title: "Full-Length Wedding Film",
    //         description: "Cinematic or Storytelling",
    //         details: "Your complete love story captured in cinematic quality"
    //     }
    // ];
    const cardsData = [
        {
            title: "🎥 Professional Filmmakers, Not Just Videographers",
            desc: "Every film is crafted with storytelling and cinematic honesty."
        },
        {
            title: "🏢 Registered Business, Not Freelancers",
            desc: "Your trust, your payments, and memories are safe with us."
        },
        {
            title: "📝 Transparent Agreements",
            desc: "Booking backed by a formal MoU — No confusion. No surprises."
        }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                    <h2 className='uppercase text-6xl md:text-5xl text-gray-900 font-league'>Why <span className='bg-gradient-to-br from-pink-300 via-pink-600 to-pink-700 bg-clip-text text-transparent'>BELIEVE?</span></h2>
                </div>

                {/* Cards Section */}
                <div className="mb-16 sm:mb-20 lg:mb-24 font-poppins">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-pink-200 hover:border-pink-400 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-100 to-pink-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white text-xl sm:text-2xl">
                                                {card.title.split(' ')[0]}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors duration-300 mb-4">
                                                {card.title.substring(card.title.indexOf(' ') + 1)}
                                            </h3>
                                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <Testimonials/> */}
                {/* <WYG/> */}
                
                {/* Call to Action */}
                {/* <div className="text-center mt-16 sm:mt-20 lg:mt-24"> */}
                    {/* <div className="bg-gradient-to-r from-pink-800 via-pink-700 to-pink-800 rounded-3xl p-10 sm:p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"> */}
                        {/* Background pattern */}
                        {/* <div className="absolute inset-0 opacity-10"> */}
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div> */}
                            {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12"></div> */}
                        {/* </div> */}
{/*  */}
                        {/* <div className="relative z-10"> */}
                            {/* <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight"> */}
                                {/* Ready to Create Your Story? */}
                            {/* </h3> */}
                            {/* <p className="text-lg sm:text-xl lg:text-2xl text-pink-100 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-light"> */}
                                {/* We accept only a limited number of weddings each season, ensuring every couple receives our complete attention and the time your love story truly deserves. */}
                            {/* </p> */}
                            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"> */}
                                {/* <button className="bg-white text-pink-800 px-10 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg lg:text-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"> */}
                                    {/* Get In Touch */}
                                {/* </button> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default WWO;