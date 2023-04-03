import React from 'react'

const UniversitasSection = ({matches}) => {
  return (
    <div className='mt-40'>
        {
            matches? 
            // Mobile View
            (<div className='px-3'>
                
            </div>) 
            : (<div></div>)
        }
    </div>
  )
}

export default UniversitasSection