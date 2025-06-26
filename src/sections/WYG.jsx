const WYG = () => {
    const services = [
        {
            icon: "📸",
            title: "Wedding Photography",
            subtitle: "Candid + Portraits"
        },
        {
            icon: "🎞️",
            title: "Wedding Trailer",
            subtitle: "Highlight Reel"
        },
        {
            icon: "🎥",
            title: "Full-Length Wedding Film",
            subtitle: "Cinematic or Storytelling"
        },
        {
            icon: "📕",
            title: "Printed Wedding Album",
            subtitle: "Premium Quality"
        },
        {
            icon: "📱",
            title: "Instant Social Media Photos",
            subtitle: "Ready to Share"
        },
        {
            icon: "💑",
            title: "Pre-Wedding Shoot",
            subtitle: "Optional Add-on"
        },
        {
            icon: "🎁",
            title: "Custom Printed Keepsakes",
            subtitle: "Frames, Mugs, Pillows"
        }
    ];

    return (
        <div className="mb-12 sm:mb-16 lg:mb-20">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    What You'll Get
                </h2>
                <div className="w-16 h-1 bg-pink-500 mx-auto mb-4"></div>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                    Every package includes these essential elements to tell your complete love story
                </p>
            </div>

            {/* Services List */}
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6 sm:space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 sm:space-x-6 group hover:bg-pink-50 transition-all duration-300 rounded-xl px-4 sm:p-6"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-50 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                                <span className="text-xl sm:text-2xl">
                                    {service.icon}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 font-light">
                                    {service.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default WYG;