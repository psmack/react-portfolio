import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
       
        {/* Hero Content */}
          <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='mt-28 text-4xl py-4 font-bold text-center sm:text-5xl'>Pailin Mack</h2>
            <p className='text-md font-semibold text-center sm:text-xl'>I am a developer and coffee enthusiast.</p>
            <p className='text-md font-semibold text-center sm:text-xl'>This is my digital portfolio, where I share what I have learned</p>
            <div className='flex items-center justify-center pt-5'>
              <Link href='https://www.linkedin.com/in/pailin-mack/'><AiFillLinkedin size={50} className='hover:text-black'/></Link>
              <Link href='https://github.com/psmack'><AiFillGithub size={50} className='hover:text-black'/></Link>
            </div>
          </div>
    </div>
  )
}

export default Hero