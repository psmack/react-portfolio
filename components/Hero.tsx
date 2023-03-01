import React from 'react'

const Hero = ({heading, title, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        {/* Hero Content */}
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold text-center'>{heading}</h2>
            <h3 className='text-xl text-center'>{title}</h3>
            <p className='py-5 text-xl'>{message}</p>
        </div>
    </div>
  )
}

export default Hero