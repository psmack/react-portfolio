import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const Projects = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        
        {/* Projects Content */}
        <div className='p-5 text-white z-[2] mt-auto pt-28 sm:mt-40'>
            <h2 className='text-5xl font-bold text-center'>Projects</h2>
            <div className='grid grid-rows-none sm:grid-cols-2 px-4 pt-2 sm:gap-5 sm:px-10 sm:py-10 lg:px-36'>
              {/* C Projects */}
              <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
              <h3 className='text-2xl font-bold text-center'>C Projects</h3>
                <ul className="flex flex-col">
                  <Link href='https://github.com/psmack/mastermind'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      Mastermind
                    </li></Link>
                    <li className='text-sm'>
                      Mastermind game written in C.
                    </li>
                </ul>
              </div>

              {/* Data Analytics Projects */}
              <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
              <h3 className='text-2xl font-bold text-center'>Data Analytics</h3>
                <ul className="flex flex-col">
                  <Link href='https://github.com/psmack/python-dashboard-panel'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                    Dashboard Panel
                    </li></Link>
                    <li className='text-sm'>
                    Interactive analytic visualization dashboard in Python.
                    </li>
                </ul>
              </div>

              {/* Python Projects */}
              <div className='bg-white text-black rounded-xl shadow-lg p-4 my-10 sm:p-10'>
                <h3 className='text-2xl font-bold text-center'>Python Projects</h3>
                <ul className="flex flex-col">
                    <Link href='https://github.com/psmack/Python-Mini-Projects'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      Python Mini Projects
                    </li>
                    </Link>
                    <li className='text-sm'>
                      Collection of simple scripts using various Python libraries.
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <Link href='https://github.com/psmack/youtube_downloader'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      Youtube Music Downloader
                    </li>
                    </Link>
                    <li className='text-sm'>
                      Download song or album from Youtube Music using pytube library.
                    </li>
                </ul>
              </div>

              {/* Web Dev */}
              <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
              <h3 className='text-2xl font-bold text-center'>Web Dev</h3>
                <ul className="flex flex-col">
                  <Link href='https://github.com/psmack/alliance'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      Alliance
                    </li>
                    </Link>
                    <li className='text-sm'>
                      Twitter clone application for the Rebel Alliance using Electron and Vue frameworks. Deployable on Web, Windows, and Andriod.
                    </li>
                </ul>
                <ul className="flex flex-col">
                  <Link href='https://github.com/psmack/react-portfolio'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      Next.js React Website
                    </li>
                    </Link>
                    <li className='text-sm'>
                      Portfolio website using Next.js and Tailwind frameworks.
                    </li>
                </ul>
                <ul className="flex flex-col">
                  <Link href='https://github.com/psmack/react-pmcodes'>
                    <li className='text-lg font-bold pt-2 hover:text-gray-500'>
                      React Website
                    </li></Link>
                    <li className='text-sm'>
                      Portfolio website using React framework.
                    </li>
                </ul>
              </div>

              
            </div>
        </div>
    </div>
  )
}

export default Projects