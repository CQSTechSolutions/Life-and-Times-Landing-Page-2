import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ImageSlider = () => {
    const images = [
        { src: "/Copy of 1.webp", alt: "Wedding couple" },
        { src: "/Copy of 2.webp", alt: "Wedding ceremony" },
        { src: "/Copy of 3.webp", alt: "Wedding rings" },
        { src: "/Copy of 4.webp", alt: "Wedding dance" },
        { src: "/Copy of 5.webp", alt: "Wedding bouquet" },
        { src: "/Copy of 6.webp", alt: "Wedding venue" },
        { src: "/Copy of 7.webp", alt: "Wedding venue" },
        { src: "/Copy of 8.webp", alt: "Wedding venue" },
        { src: "/Copy of 9.webp", alt: "Wedding venue" }
    ];

    return (
        <div className='py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white'>
            {/* Section Header */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20'>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
                        Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600'>Work</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6 sm:mb-8'></div>
                    <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Every frame tells a story, every moment captured with love
                    </p>
                </div>
            </div>

            {/* Edge-to-Edge Image Slider */}
            <div className='relative w-full'>
                <Swiper
                    modules={[Pagination, Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 15,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet-custom',
                        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="relative group">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination */}
                <div className="swiper-pagination-custom flex justify-center mt-8 sm:mt-12 space-x-3"></div>
            </div>

            <style jsx>{`
                .swiper-pagination-bullet-custom {
                    width: 12px;
                    height: 12px;
                    background: #e5e7eb;
                    border-radius: 50%;
                    opacity: 1;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-custom:hover {
                    background: #ec4899;
                    transform: scale(1.2);
                }
                .swiper-pagination-bullet-active-custom {
                    background: linear-gradient(135deg, #ec4899, #be185d);
                    transform: scale(1.3);
                }
                @media (min-width: 640px) {
                    .swiper-pagination-bullet-custom {
                        width: 14px;
                        height: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImageSlider; 