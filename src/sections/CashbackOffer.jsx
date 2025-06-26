import React, { useState } from 'react';

const CashbackOffer = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    weddingDate: '',
    city: '',
    message: ''
  });

  const offerItems = [
    "Wedding Photography",
    "Wedding Films"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
          "Get your wedding photography done for FREE."
        </h1>
        
        {/* Sub-headline */}
        <div className="mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Sounds unbelievable, right? But it's true.
          </p>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-amber-600 font-semibold mb-8 sm:mb-12 lg:mb-16">
          Free mean 100% cashback
        </p>

        {/* The Offer Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            What You Get
          </h3>
          <div className="text-left max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {offerItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-green-500 text-lg sm:text-xl mt-1 flex-shrink-0">✅</div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Are We Doing This */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Are We Doing This?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For the last few years, we've been working on other creative projects.
            <br className="hidden sm:block" />
            Now, we're returning to weddings — to the craft we love most: capturing stories of real people.
            <br className="hidden sm:block" />
            And to restart strong, we're putting our full confidence on the table.
            <br className="hidden sm:block" />
            This offer is our way to build trust — fast, transparent, and bold.
          </p>
        </div>

        {/* Why Trust Us */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Trust Us?
          </h3>
          <div className="text-left max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div className="text-lg sm:text-xl mt-1 flex-shrink-0">🎥</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Professional Filmmakers, Not Just Videographers
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 ml-6 sm:ml-8">
                We approach every wedding like a film — crafted with storytelling, emotion, and cinematic honesty.
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div className="text-lg sm:text-xl mt-1 flex-shrink-0">🏢</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Registered Business, Not Freelancers
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 ml-6 sm:ml-8">
                Your trust, your payments, and memories are safe with us.
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div className="text-lg sm:text-xl mt-1 flex-shrink-0">📝</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Transparent Agreements
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 ml-6 sm:ml-8">
                Booking backed by a formal MoU — No confusion. No surprises.
              </p>
            </div>
          </div>
        </div>


        {/* Limited Offer Warning */}
        <div className="mb-8 sm:mb-12 lg:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3 text-gray-800">
            <div className="text-amber-500 text-lg sm:text-xl flex-shrink-0">⚠</div>
            <p className="text-sm sm:text-base lg:text-lg font-medium">Only 3 weddings eligible for this offer.</p>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-800">
            <div className="text-amber-500 text-lg sm:text-xl flex-shrink-0">⚠</div>
            <p className="text-sm sm:text-base lg:text-lg font-medium">Bookings must be confirmed before June 30, 2025.</p>
          </div>
        </div>

        {/* Call To Action Section */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            Interested? Let's talk.
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            📩 Fill your details below and we'll get in touch:
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-sm sm:text-base"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="date"
                name="weddingDate"
                placeholder="Wedding Date"
                value={formData.weddingDate}
                onChange={handleInputChange}
                className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-sm sm:text-base"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-sm sm:text-base"
                required
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Short Message (optional)"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-3 sm:px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 resize-vertical text-sm sm:text-base"
            />
            
            <button
              type="submit"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg"
            >
              Claim My Slot
            </button>
          </form>
          
          <p className="text-xs sm:text-sm text-gray-500 italic mt-6 sm:mt-8 max-w-2xl mx-auto leading-relaxed">
            This isn't a discount. It's a one-time comeback offer. We only want 3 amazing couples who believe in stories told with heart.
            <br className="hidden sm:block" />
            For detailed terms & questions, feel free to DM us directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CashbackOffer; 