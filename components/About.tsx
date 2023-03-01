import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        
        {/* About Content */}
        <div className='p-5 text-white z-[2] sm:mt-40'>
            <h2 className='text-5xl font-bold text-center'>About</h2>
             {/* Education */}
            <div className='bg-white text-black rounded-xl shadow-lg p-4 my-10 sm:p-10'>
              <h3 className='text-2xl font-bold'>Education</h3>
              <ul className="">
                <li className='text-lg font-bold pt-2'>
                  University of Maryland Global Campus
                </li>
                <li className=''>
                  Master of Science, Cybersecurity 
                </li>
                <li className=''>
                  2019-Present
                </li>
              </ul>
              <ul className="">
                <li className='text-lg font-bold pt-2'>
                  UMBC Training Center
                </li>
                <li className=''>
                  Certification, Computer Programming
                </li>
                <li className=''>
                  2019-2020
                </li>
              </ul>
              <ul className="">
                <li className='text-lg font-bold pt-2'>
                  University of California, Riverside
                </li>
                <li className=''>
                  Bachelor of Science, Bioengineering
                </li>
                <li className=''>
                  2007-2011
                </li>
              </ul>
            </div>

            {/* Certification */}
            <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
              <h3 className='text-2xl font-bold'>Certification</h3>
              <ul className="about-item">
                <li className='text-lg font-bold pt-2'>
                  Google Data Analytics Professional Certification 
                </li>
                <li>
                  Issued: February 2023
                </li>
                <li className='text-lg font-bold pt-2'>
                  CompTIA Network+ 
                </li>
                <li>
                  Issued: July 2019
                </li>
                <li>
                  Expired: July 2025
                </li>
              </ul>
            </div>  
        </div>
    </div>
  )
}

export default About