import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]'/>
        {/* Hero Content */}
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-4xl py-4 font-bold text-center sm:text-5xl'>Pailin Mack</h2>
            <p className='text-md text-center sm:text-xl'>I am a Developer and Coffee Euthusiast</p>
            <p className='text-md text-center sm:text-xl'>This is my digital portfolio, where I share what I have learned</p>
            <div className='flex items-center justify-center pt-5'>
              <Link href='https://www.linkedin.com/in/pailin-mack/'><AiFillLinkedin size={50} /></Link>
              <Link href='https://github.com/psmack'><AiFillGithub size={50} /></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero