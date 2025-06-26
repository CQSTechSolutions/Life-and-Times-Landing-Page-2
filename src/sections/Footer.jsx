import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className='bg-black py-8 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Desktop Layout */}
                <div className='hidden md:flex items-center justify-between'>
                    <div className='text-white'>
                        <h3 className='text-lg font-semibold mb-1'>Life & Times</h3>
                        <p className='text-gray-300 text-sm'>Wedding Storytellers</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <a href="https://www.instagram.com/lifeandtimesindia?igsh=MXNrdnNiZTAwbXA1bg==" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://wa.me/919819261797" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaWhatsapp size={24} />
                        </a>
                        <a href="mailto:lifeandtimesindia@gmail.com" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='md:hidden text-center space-y-6'>
                    <div>
                        <h3 className='text-white text-xl font-semibold mb-2'>Life & Times</h3>
                        <p className='text-gray-300 text-sm'>Wedding Storytellers</p>
                    </div>
                    <div className='flex items-center justify-center gap-8'>
                        <a href="https://www.instagram.com/lifeandtimesindia?igsh=MXNrdnNiZTAwbXA1bg==" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaInstagram size={28} />
                        </a>
                        <a href="#" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaWhatsapp size={28} />
                        </a>
                        <a href="mailto:lifeandtimesindia@gmail.com" className='text-white hover:text-gray-300 transition-colors duration-200'>
                            <FaEnvelope size={28} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className='border-t border-gray-800 mt-8 pt-6 text-center'>
                    <p className='text-gray-400 text-xs'>
                        © {new Date().getFullYear()} Life & Times. All rights reserved.
                    </p>
                </div>
            </div>
            <div className={'hidden'}>
                Built by <a href="https://www.linkedin.com/in/soumay-sanpui/" target="_blank" rel="noopener noreferrer">Soumay Sanpui</a> and <a href="https://www.linkedin.com/in/shivamgupta11122004/" target="_blank" rel="noopener noreferrer">Shivam Gupta</a>.
            </div>
        </footer>
    )
}

export default Footer;