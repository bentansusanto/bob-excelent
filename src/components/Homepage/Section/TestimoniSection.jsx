import React from 'react'

const TestimoniSection = ({matches}) => {
  return (
    <div className='mt-40'>
        {
            matches ? 
            // Mobile Device
            (<div>
                Testimoni
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default TestimoniSection