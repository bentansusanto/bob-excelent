import React, { useState } from 'react'
import BgProblemSection from '../../../assets/bg-problemsection-2.webp'
import { ListProblem } from '../../../Data/ListProblem'

const ProblemSection = ({matches}) => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(true)
    }

  return (
    <div className='mt-40' id='problem'>
       {
            matches? 
            (<div>           
                <img src={BgProblemSection} alt="" className='mx-auto w-[85%]'/>
                <div className='mx-3 mt-10'>
                    <h2 className='text-[24px] font-bold pb-5'>Yang sering dialami selama mepersiapkan tes SNBT</h2>
                    <div className='grid grid-cols-1 gap-5 justify-items-center'>
                        {
                            ListProblem.slice(0, showMore ? ListProblem.length : 3).map((val, idx) => (
                                <div key={idx} className='bg-white rounded-md shadow-md p-3 flex items-center space-x-3'>
                                    <p>{val.list}</p>
                                </div>

                            ))
                        }
                    </div>
                    <div className='text-center mt-10 text-white'>
                        {
                            !showMore ? (<button className='bg-orange-500 py-2.5 px-6 font-medium rounded-md' onClick={handleShowMore}>Show more</button>) : (<button className='bg-orange-500 py-2.5 px-6 font-medium rounded-md' onClick={() => setShowMore(false)}>Show les</button>)
                        }
                    </div>
                </div>
            </div>) : 
            (<div></div>)
       }
    </div>
  )
}

export default ProblemSection