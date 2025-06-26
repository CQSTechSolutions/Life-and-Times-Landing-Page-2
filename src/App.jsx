import React from 'react'
import Hero from './sections/Hero.jsx'
import ComparisonSection from './sections/ComparisonSection.jsx'
import TruthSection from './sections/TruthSection.jsx'
import Intro from './sections/Intro.jsx'
import WhyGoodFilmsMatter from './sections/WhyGoodFilmsMatter.jsx'
import ImageSlider from './sections/ImageSlider.jsx'
import WWO from './sections/WWO.jsx'
import WedStyle from './sections/WedStyle.jsx'
import Pricing from './sections/Pricing.jsx'
import Testimonials from './sections/Testimonials.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './sections/Footer.jsx'
import WYG from "./sections/WYG.jsx";
import AskSection from './sections/AskSection.jsx'
import CTA1 from './sections/CTA1.jsx'
import WhatWeOffer from "./sections/WhatWeOffer.jsx";
import CashbackOffer from './sections/CashbackOffer.jsx'

const App = () => {
    return (
        <div className='overflow-x-hidden font-poppins'>
            <Hero/>
            <ComparisonSection/>
            {/* <TruthSection/> */}
            {/* <AskSection/> */}
            {/* <CTA1/> */}
            <ImageSlider/>
            <WhatWeOffer />
            <WhyGoodFilmsMatter/>
            <WWO/>
            <Testimonials/>
            <HowItWorks/>
            {/* <Intro/> */}
            {/* <WedStyle/> */}
            {/*<Pricing/>*/}
            <CTA/>
            <Footer/>
            {/* <CashbackOffer/> */}
        </div>
    )
}

export default App