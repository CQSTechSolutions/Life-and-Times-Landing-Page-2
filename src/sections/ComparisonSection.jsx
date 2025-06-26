import React from 'react';

const ComparisonSection = () => {
    const options = [
        "Full wedding coverage",
        "Book before June 30",
        "Only 3 slots available"
    ]
    return (
        <div className='p-4 py-24 my-4'>
            <p className='font-poppins text-gray-800 text-lg flex flex-col justify-center items-center text-center'>
                We're offering free wedding photography services to three couples who would book their dates before 30th June. Free means 100% cashback of what they spend on their wedding-photography.
            </p>
            <div className='flex flex-col justify-center items-center text-center py-12 gap-4 my-4'>
                {options.map((option, index) => (
                    <p key={index} className='p-4 py-8 w-[90dvw] rounded-lg text-2xl bg-gradient-to-br from-pink-600 to-pink-500 text-white font-poppins text-gray-800 flex justify-center items-center text-center w-1/3'>
                        {option}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ComparisonSection; 