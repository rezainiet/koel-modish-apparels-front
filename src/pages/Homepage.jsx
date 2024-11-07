import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs/AboutUs'
import EthicsAndPhilosophy from '../components/EthicsAndPhilosophy/EthicsAndPhilosophy'
import MissionVision from '../components/MissionVision/MissionVision'
import OurProducts from '../components/OurProducts/OurProducts'

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <EthicsAndPhilosophy />
            <MissionVision />
            <OurProducts />
        </>
    )
}

export default Homepage