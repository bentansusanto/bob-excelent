import React, { useEffect, useState } from 'react'
import AboutPackage from './Section/AboutPackage';
import HeroSection from './Section/HeroSection';
import ProblemSection from './Section/ProblemSection';
import ServiceSection from './Section/ServiceSection';

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
    </div>
  )
}

export default Homepage