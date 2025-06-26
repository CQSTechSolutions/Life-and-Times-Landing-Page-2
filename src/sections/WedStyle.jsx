import React from 'react';

const WedStyle = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Choose Your Wedding Film Style</h1>
                
                <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
                    {/* Cinematic Film Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🎨</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cinematic Film</h2>
                            <p className="text-gray-600 leading-relaxed">
                                A clean, timeless edit of your wedding with music and visuals.
                                No interviews. No voiceovers. Just elegant storytelling through frames, motion, and sound.
                            </p>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                For couples who want something simple, classy, and beautiful.
                            </p>
                        </div>
                    </div>

                    {/* Center Line */}
                    <div className="hidden md:block w-px h-32 bg-gray-300"></div>
                    <div className="md:hidden w-32 h-px bg-gray-300"></div>

                    {/* Storytelling Film Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🎥</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Storytelling Film</h2>
                            <p className="text-gray-600 leading-relaxed">
                                A deeper narrative with interviews, real voices, emotional layers, and behind-the-scenes moments.
                                It takes more effort — but brings your story alive in the most personal way.
                            </p>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                For couples who want to feel it again. And again. And again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WedStyle;