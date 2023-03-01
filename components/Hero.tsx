import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Hero = ({heading, title, message}) => {
  return (
    <div className='flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        {/* Hero Content */}
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl py-4 font-bold text-center'>{heading}</h2>
            <p className='text-xl text-center'>{title}</p>
            <p className='text-xl'>{message}</p>
            <div className='flex items-center justify-center pt-5'>
              <Link href='https://www.linkedin.com/in/pailin-mack/'><AiFillLinkedin size={50} /></Link>
              <Link href='https://github.com/psmack'><AiFillGithub size={50} /></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero