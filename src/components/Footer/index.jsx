import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Whatsapp from '../../assets/icon-whatsapp.svg'

const mediaQuery = window.matchMedia("(max-width: 600px)");

const links = [
    {section : 'About Us', link : '/#about'},
    {section : 'Problem', link : '/#problem'},
    {section : 'Service', link : '/#service'},
    {section : 'Benefit', link : '/#benefit'},
    {section : 'Package', link : '/#package'},
    {section : 'Testimoni', link : '/#testimoni'}
]

const Footer = () => {
    const [matches, setMatches] = useState(mediaQuery.matches)
    const message = 'Halo, saya mau bertanya untuk paket UTBK'
    const phoneNumber = "+628812518233"

    const handleClosePromo = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
    }

    useEffect(() => {
        const handler = (e) => {
            setMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handler)

        return () => {
            mediaQuery.removeEventListener('change', handler)
        }
    }, [])

  return (
    <div className='mt-20'>
        {
            matches ? 
            // Mobile view
            (<div className='bg-[#002050] w-screen py-3 px-3 text-white'>
                <div className='space-y-2'>
                    <h4 className='font-semibold'>Prof Bob's Excelent</h4>
                    <p className='text-[.9rem] text-gray-400'>Prof. Bob Excellent adalah tempat Bimbingan Belajar (Bimbel) yang fokus bantuin menyelesaikan ragam permasalahan kamu dalam rangka sukses masuk PTN Favorit!</p>
                </div>
                <div className='flex space-x-14 mt-6'>
                    <div className='space-y-2'>
                        <h4 className='font-semibold'>Quicklinks</h4>
                        <ul className='space-y-2'> 
                            {
                                links.map((val, idx) => (
                                    <li key={idx}>
                                        <Link smooth to={val.link}>{val.section}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h4 className='font-semibold'>Contact Us</h4>
                        <p className='text-[.9rem]'>Jl. Rengas Raya No.21, Rengas, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412 (Sebelah TK Kartini)</p>
                    </div>
                </div>
                <footer className='mt-10'>
                    <p className='text-[.9rem] text-gray-300 text-center'>
                        ©2022, Prof Bob's Excelent
                    </p>
                </footer>
                <div onClick={handleClosePromo} className='fixed z-40 bottom-5 right-5'>
                    <img src={Whatsapp} alt="whatsapp" className='w-14'/>
                </div>
            </div>) 
            : (<div></div>)
        }
    </div>
  )
}

export default Footer