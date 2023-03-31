import React from 'react'
import { listService } from '../../../Data/ListService'

const ServiceSection = ({matches}) => {
  return (
    <div className='mt-40'>
        {
            matches ? 
            (<div className='px-3'>
                <h2 className='font-bold text-[22px]'>Inilah Alasan yang akan membuatmu betah belajar bersama Prof. Bob Excellent.</h2>
                <div className='grid grid-cols-1 gap-5 justify-items-center mt-10'>
                  {
                    listService.map((val, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-md shadow-md space-y-2">
                        <img src={ require("../../../assets/"+val.icon)} alt="" />
                        <p>{val.title}</p>
                      </div>
                    ))
                  }
                </div>
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default ServiceSection