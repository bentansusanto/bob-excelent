import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Whatsapp from '../../assets/icon-whatsapp.svg'

const mediaQuery = window.matchMedia("(max-width: 600px)");

const links = [
    {section : 'About Us', link : '/#about'},
    {section : 'Problem', link : '/#about'},
    {section : 'Service', link : '/#about'},
    {section : 'Benefit', link : '/#about'},
    {section : 'Package', link : '/#about'},
    {section : 'Testimoni', link : '/#about'}
]

const Footer = () => {
    const [matches, setMatches] = useState(mediaQuery.matches)

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
                    <p className='text-[.9rem] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iusto quia ratione sequi qui corrupti! Eveniet, aliquid illum?</p>
                </div>
                <div className='flex space-x-10 mt-6'>
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
                        <p className='text-[.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste consectetur veniam?</p>
                    </div>
                </div>
                <footer className='mt-10'>
                    <p className='text-[.9rem] text-gray-300 text-center'>
                        ©2022, Prof Bob's Excelent
                    </p>
                </footer>
                <div className='fixed z-40 bottom-5 right-5'>
                    <img src={Whatsapp} alt="whatsapp" className='w-14'/>
                </div>
            </div>) 
            : (<div></div>)
        }
    </div>
  )
}

export default Footer