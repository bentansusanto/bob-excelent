import React, { useEffect, useState } from 'react'
import LogoBob from '../../assets/logo-bobexcelent.webp'
import { HashLink as Link } from 'react-router-hash-link';
import {IoClose,IoMenu} from 'react-icons/io5'
import {BiChevronLeftCircle} from 'react-icons/bi' 

const mediaQuery = window.matchMedia("(max-width: 600px)");

const links = [
    {section : 'About Us', link : '/#about'},
    {section : 'Problem', link : '/#problem'},
    {section : 'Service', link : '/#service'},
    {section : 'Benefit', link : '/#benefit'},
    {section : 'Package', link : '/#package'},
    {section : 'Testimoni', link : '/#testimoni'}
]

const Navbar = () => {
    const [matches, setMatches] = useState(mediaQuery.matches);
    const [openNav, setOpenNav] = useState(false)
    const message = 'Halo, saya mau bertanya untuk paket UTBK'
    const phoneNumber = '+6289604276162'

    const handleClosePromo = () => {
        window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
    }

    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }

    useEffect(() => {
        const handler = (e) => {
            setMatches(e.matches);
        }

        mediaQuery.addEventListener('change', handler)

        return () => {
            mediaQuery.removeEventListener('change', handler)
        }
    }, [])
    
  return (
    <div>
        {
            matches ? 
            (<div className='fixed top-0 z-30'>
                <div className="bg-orange-500 bg-gradient-to-r from-red-600 to-orange-400 py-2 text-white space-x-10 flex items-center px-5">
                    <p className='text-[14px] font-semibold'>
                        Khusus untuk Kamu yang Fokus Siap Mengikuti SNBT 2023!  
                    </p>
                    <BiChevronLeftCircle className="text-5xl -rotate-180" onClick={handleClosePromo}/>
                    </div>
                <div className='relative'>
                    <div className='py-3 px-5 bg-white shadow-md flex justify-between items-center'>
                        <img src={LogoBob} alt="logo bob" className='w-14 opacity-0'/>
                        {/* <h4 className='font-bold'>Prof Excelent</h4> */}
                        {
                            openNav ? (<IoClose onClick={() => setOpenNav(false)} className='text-2xl'/>) : (<IoMenu onClick={handleOpenNav} className='text-2xl'/>)
                        }
                        
                    </div>
                <ul onClick={() => setOpenNav(false)} className={`${openNav ? "top-16" : "top-[-500px]"} bg-white shadow-md p-3 w-screen space-y-5 absolute`}>
                    {
                        links.map((val, idx) => (
                            <li key={idx}>
                                <Link smooth to={val.link}>{val.section}</Link>
                            </li>
                        ))
                    }
                    <div onClick={handleClosePromo} className='pt-5'>
                        <button className='w-full bg-orange-500 py-2 rounded-full text-white font-semibold'>Contact Us</button>
                    </div>
                </ul>
                </div>
            </div>) : 
            (<div>
                Navbar Desktop
            </div>)
        }
    </div>
  )
}

export default Navbar