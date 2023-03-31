import React from 'react'
import Pattern from '../../../assets/pattern-herosection.svg'
import BgHeroSection from '../../../assets/bg-herosection.webp'

const HeroSection = ({matches}) => {
  return (
    <div id='about' className='overflow-x-hidden'>
        {
            matches? 
            (<div className='bg-gradient-to-br from-blue-700 to-cyan-400 w-screen h-screen relative'>
              <div className='px-5 pt-44 text-white'>
                <h1 className='text-[26px] font-semibold'>Mudahnya Masuk PTN Favorit Tanpa Harus Berlama-lama Belajar dengan Program Jaminan PTN dari Prof. Bob Excellent!</h1>
                <img src={BgHeroSection} alt="bg hero section" className='absolute bottom-0'/>
              </div>
              <img src={Pattern} alt="pattern" className='absolute top-14 -left-2 w-32'/>
              <img src={Pattern} alt="pattern" className='absolute bottom-10 -rotate-180 -right-2 w-32'/>
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default HeroSection