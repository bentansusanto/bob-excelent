import React from 'react'

const aanotherAlumni = ["alumni-1.webp", "alumni-2.webp", "alumni-3.webp"]

const AnotherTestimoni = ({matches}) => {
  return (
    <div className='mt-20'>
        {
            matches ? 
            // Mobile View
            (<div className='grid grid-cols-1 gap-6 px-3'>
                {
                    aanotherAlumni.map((val) => (
                        <img key={val} src={require('../../../assets/alumni/'+val)} alt={val}/>
                    ))
                }
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default AnotherTestimoni