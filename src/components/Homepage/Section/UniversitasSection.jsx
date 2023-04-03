import React from 'react'

const universitas = ["UI.svg", "UPN.svg", "ITB.svg", "IPB.svg", "UGM.svg", "UB.svg"]

const UniversitasSection = ({matches}) => {
  return (
    <div className='mt-20'>
        {
            matches? 
            // Mobile View
            (<div className='grid grid-cols-2 gap-5 justify-items-center mx-6'>
                {
                    universitas.map((val) => (
                        <img key={val} src={require("../../../assets/logo-univ/"+val)} alt="val" className='w-24'/>
                    ))
                }
            </div>) 
            : (<div></div>)
        }
    </div>
  )
}

export default UniversitasSection