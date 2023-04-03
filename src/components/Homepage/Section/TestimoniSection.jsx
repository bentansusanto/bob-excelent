import React from 'react'
import { listTestimoni } from '../../../Data/ListTestimoni'

const TestimoniSection = ({matches}) => {
  return (
    <div className='mt-40' id='testimoni'>
        {
            matches ? 
            // Mobile Device
            (<div className='px-3 bg-blue-100 py-3'>
                  <h2 className='font-bold text-[22px] text-center'>Kata alumni tentang Bimbel Prof Excelent</h2>
                  <div className='grid grid-cols-1 gap-5 justify-items-center mt-10'>
                    {
                      listTestimoni.map((val, idx) => (
                        <div key={idx} className='bg-white shadow-md p-3 space-y-3 rounded-md'>
                          <div className='flex space-x-3'>
                            <img src={require('../../../assets/'+val.foto)} alt={val.nama} className="w-16" />
                            <div>
                                <h4 className='font-semibold'>{val.nama}</h4>
                                <p className='text-[.9rem] font-medium text-gray-400'>{val.lulus_terima}</p>
                            </div>
                          </div>
                          <p>{val.pesan}</p>
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

export default TestimoniSection