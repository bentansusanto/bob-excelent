import React from 'react'
import BgAboutPackage from '../../../assets/bg-aboutprogram.webp'

const about = {
    title : "Program Jaminan PTN kami bantu kamu sukses masuk PTN.",
    content : ["Program Jaminan PTN Prof. Bob Excellent adalah Bimbel yang fokus menyelesaikan permasalahanmu agar sukses masuk PTN Favorit! Kamu akan dipersiapkan secara menyeluruh untuk mengikuti SNBT dengan kepercayaan diri yang tinggi.", "Selain materi pembelajaran, kamu juga akan diberikan pelatihan mental, teknik, manajemen energi dan stamina untuk mendukung efektivitasmu saat SNBT."]
}

const AboutPackage = ({matches}) => {
  return (
    <div className='mt-40'>
        {
            matches ? 
            // Mobile View
            (<div className='px-3'>
                <img src={BgAboutPackage} alt="bg-about-package" className='w-62 mx-auto'/>
                <div className='mt-5 space-y-2'>
                    <h2 className='text-[21px] font-bold'><span className='text-orange-500'>Jangan khawatir!</span> <br />{about.title}</h2>
                    <p className='text-gray-500'>{about.content[0]}</p>
                    <p className='text-gray-500'>{about.content[1]}</p>
                </div>
            </div>) : 
            // Desktop View
            (<div></div>)
        }
    </div>
  )
}

export default AboutPackage