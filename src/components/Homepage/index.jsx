import React, { useEffect, useState } from 'react'
import AboutPackage from './Section/AboutPackage';
import AnotherTestimoni from './Section/AnotherTestimoni';
import BenefitSection from './Section/BenefitSection';
import HeroSection from './Section/HeroSection';
import PackageSection from './Section/PackageSection';
import ProblemSection from './Section/ProblemSection';
import PromosiSection from './Section/PromosiSection';
import ServiceSection from './Section/ServiceSection';
import TestimoniSection from './Section/TestimoniSection';
import UniversitasSection from './Section/UniversitasSection';

const mediaQuery = window.matchMedia("(max-width: 600px)");

const Homepage = () => {
  const [matches, setMatches] = useState(mediaQuery.matches)

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches)
      
    }

    mediaQuery.addEventListener('change', handler)

    return() => {
        mediaQuery.removeEventListener('change', handler)
    }
  }, [])
  
  return (
    <div>
      <HeroSection matches={matches}/>
      <ProblemSection matches={matches}/>
      <AboutPackage matches={matches}/>
      <UniversitasSection matches={matches}/>
      <ServiceSection matches={matches}/>
      <PackageSection matches={matches}/>
      <BenefitSection matches={matches}/>
      <TestimoniSection matches={matches}/>
      <AnotherTestimoni matches={matches}/>
      <PromosiSection matches={matches}/>
    </div>
  )
}

export default Homepage