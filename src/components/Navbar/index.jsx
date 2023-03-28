import React, { useEffect, useState } from 'react'
import LogoBob from '../../assets/logo-bob.webp'
import { HashLink as Link } from 'react-router-hash-link';
import {IoClose,IoMenu} from 'react-icons/io5'

const mediaQuery = window.matchMedia("(max-width: 600px)");

const links = [
    {section : 'About Us', link : '/#about'},
    {section : 'About Us', link : '/#about'},
    {section : 'About Us', link : '/#about'},
    {section : 'About Us', link : '/#about'}
]

const Navbar = () => {
    const [matches, setMatches] = useState(mediaQuery.matches);
    const [closePromo, setClosePromo] = useState(false)
    const [openNav, setOpenNav] = useState(false)

    const handleClosePromo = () => {
        setClosePromo(!closePromo)
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
            (<div>
                <div className={`${closePromo ? "hidden" : "bg-orange-500 py-2"} text-white space-x-10 flex items-center px-3`}>
                    <p className='text-center text-[13px] font-semibold'>
                        Khusus untuk Kamu yang Fokus Siap Mengikuti SNBT 2023!  
                    </p>
                    <IoClose className='text-2xl'onClick={handleClosePromo}/>
                    </div>
                <div>
                    <div className='py-3 px-5 bg-white shadow-md flex justify-between items-center'>
                        <img src={LogoBob} alt="logo bob" className='w-14'/>
                        {
                            openNav ? (<IoClose className='text-2xl'/>) : (<IoMenu className='text-2xl'/>)
                        }
                        
                    </div>
                <ul>
                    {
                        links.map((val, idx) => (
                            <li key={idx}>
                                <Link smooth to={val.link}>{val.section}</Link>
                            </li>
                        ))
                    }
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