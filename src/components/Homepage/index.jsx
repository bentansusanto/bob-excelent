import React, { useEffect, useState } from 'react'
import AboutPackage from './Section/AboutPackage';
import BenefitSection from './Section/BenefitSection';
import HeroSection from './Section/HeroSection';
import PackageSection from './Section/PackageSection';
import ProblemSection from './Section/ProblemSection';
import ServiceSection from './Section/ServiceSection';
import TestimoniSection from './Section/TestimoniSection';

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
      <ServiceSection matches={matches}/>
      <PackageSection matches={matches}/>
      <BenefitSection matches={matches}/>
      <TestimoniSection matches={matches}/>
    </div>
  )
}

export default Homepage