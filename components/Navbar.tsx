import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaCoffee } from "react-icons/fa"
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
      };

  return (
    <div className='nav-format'>
        <div className='nav-menu'>
            <Link className='flex flex-row' href='/'>
                <h1 className='font-bold text-3xl py-2'><FaCoffee/></h1>
                <h1 className='font-bold text-4xl '>PMCodes</h1>
            </Link>
            {/* Hide menu when in small screen. Show as flex in bigger screen */}
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link href='/techstack'>Tech Stack</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'nav-show-mobile-menu' : 'nav-hide-mobile-menu'}>
                <ul>
                    <li onClick={handleNav} className='nav-mobile-menu-item'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='nav-mobile-menu-item'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li onClick={handleNav} className='nav-mobile-menu-item'>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li onClick={handleNav} className='nav-mobile-menu-item'>
                        <Link href='/techstack'>Tech Stack</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar