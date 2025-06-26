import React, { useState } from 'react';

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        venue: '',
        eventDates: '',
        contactNumber: '',
        eventDetails: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = '';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        // Log form data for debugging
        console.log('Submitting form data:', formData);

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'no-cors' // Required for Google Apps Script
            });

            console.log('Form submitted successfully');
            setSubmitStatus('success');
            
            // Reset form after successful submission
            setFormData({
                name: '',
                city: '',
                venue: '',
                eventDates: '',
                contactNumber: '',
                eventDetails: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-6xl uppercase text-gray-900 mb-4 font-league">Ready to <span className="bg-gradient-to-br from-pink-400 to-pink-700 text-transparent bg-clip-text">Begin?</span></h2>
                    <p className="text-gray-600 text-lg">Our work starts at <span className="text-pink-500 font-bold">₹75,000.</span></p>
                    <p className="text-gray-600">No spam. No pressure.</p>
                    <p className="text-gray-600">If this feels right to you, share your details below — and <span className="bg-gradient-to-br from-pink-400 to-pink-700 text-transparent bg-clip-text font-bold">let's talk.</span></p>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Thank you! Your form has been submitted successfully. We'll contact you within 24 hours.</span>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span>Sorry, there was an error submitting your form. Please try again or contact us directly.</span>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 font-poppins">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isSubmitting}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">City *</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isSubmitting}
                                placeholder="Enter your city"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Venue *</label>
                            <input
                                type="text"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isSubmitting}
                                placeholder="Enter wedding venue name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Event Dates *</label>
                            <input
                                type="text"
                                name="eventDates"
                                value={formData.eventDates}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isSubmitting}
                                placeholder="e.g., 15th March 2024 or March 2024"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Contact Number *</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                                disabled={isSubmitting}
                                placeholder="+91 9876543210"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Tell us details of your events *</label>
                            <textarea
                                name="eventDetails"
                                value={formData.eventDetails}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                                isSubmitting 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-br from-pink-400 to-pink-600 hover:bg-pink-600'
                            } text-white`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </div>
                            ) : (
                                'Get My Quote'
                            )}
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            You'll hear from us within 24 hours. No spam. Just a warm reply.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CTA;