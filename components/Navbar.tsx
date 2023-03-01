import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaCoffee } from "react-icons/fa"
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav);
      };
    
      useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#000000');
            setTextColor('#ffffff');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240x] m-auto flex justify-between items-center p-4 text-white '>
            <Link className='flex flex-row' href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-3xl py-2'><FaCoffee/></h1>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl '>PMCodes</h1>
            </Link>
            
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
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
                {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
    
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/techstack'>Tech Stack</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar