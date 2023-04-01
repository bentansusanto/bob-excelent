import React from 'react'
import BgBenefit from '../../../assets/bg-benefit.webp'
import { listBenefit } from '../../../Data/ListBenefit'

const BenefitSection = ({matches}) => {
  return (
    <div className='mt-40'>
      {
        matches ? 
        // Mobile View
        (<div className='px-3'>
            <img src={BgBenefit} alt="" />
            <div className='mt-5'>
              <h2 className='font-bold text-[22px]'>Benefit yang kamu dapat belajar bersama Prof. Bob Excellent.</h2>
              <div className='grid grid-cols-1 gap-5 justify-items-center mt-4'>
                {
                  listBenefit.map((val, idx) => (
                    <div key={idx} className="bg-white rounded-md p-3 shadow-md">
                      <p>{val}</p>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>) : 
        (<div></div>)
      }
    </div>
  )
}

export default BenefitSection