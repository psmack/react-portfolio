import React from 'react'
import {BsFillMoonStarsFill, BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaCoffee} from 'react-icons/fa'
import Image from "next/image"
import ahsoka from '../public/ahsoka.jpg'
// Languages
import icon_c from '../public/tech_stack/icon-c.png'
import icon_python from '../public/tech_stack/icon-python.png'
import icon_sql from '../public/tech_stack/icon-sql.png'
import icon_js from '../public/tech_stack/icon-js.png'
import icon_html from '../public/tech_stack/icon-html.png'
import icon_css from '../public/tech_stack/icon-css.png'
import icon_r from '../public/tech_stack/icon-r.png'
// Learning
import icon_django from '../public/tech_stack/icon-django.png'
import icon_flask from '../public/tech_stack/icon-flask.png'
import icon_php from '../public/tech_stack/icon-php.png'
import icon_typescript from '../public/tech_stack/icon-typescript.png'
// Frameworks
import icon_react from '../public/tech_stack/icon-react.png'
import icon_vue from '../public/tech_stack/icon-vue.png'
import icon_electron from '../public/tech_stack/icon-electron.png'
import icon_nextjs from '../public/tech_stack/icon-nextjs.svg'
import icon_tailwind from '../public/tech_stack/icon-tailwind.svg'
// Platforms
import icon_docker from '../public/tech_stack/icon-docker.png'
import icon_git from '../public/tech_stack/icon-git.png'
import icon_nodejs from '../public/tech_stack/icon-nodejs.png'
import icon_rasp from '../public/tech_stack/icon-rasp-pi.png'
import icon_rstudio from '../public/tech_stack/icon-rstudio.png'
import icon_tableau from '../public/tech_stack/icon-tableau.png'
import icon_vscode from '../public/tech_stack/icon-vscode.png'
// React libraries
import { useState } from "react"
import { useRef } from "react"

const Techstack = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-cover custom-img'>
    {/* Overlay */}
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
    
    {/* Tech Stack Content */}
    <div className='p-5 text-white z-[2] mt-auto pt-28 sm:mt-20'>
        <h2 className='text-5xl font-bold text-center'>Tech Stack</h2>
        <div className='grid grid-rows-none sm:grid-cols-2 px-4 pt-2 sm:gap-5 sm:px-20 py-10'>
          {/* Languages */}
          <div className='bg-white text-black rounded-xl shadow-lg p-4 my-10 sm:p-10'>
                    <h3 className='text-2xl font-bold text-center'>Languages</h3>
                    <div className='flex justify-center flex-wrap gap-2 py-5'>
                      <Image src={icon_c} alt="" />
                      <Image src={icon_python} alt="" />
                      <Image src={icon_sql} alt="" />
                      <Image src={icon_js} alt="" />
                      <Image src={icon_html} alt="" />
                      <Image src={icon_css} alt="" />
                      <Image src={icon_r} alt="" />
                    </div> 
                  </div>

                  {/* Learning */}
                  <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
                    <h3 className='text-2xl font-bold text-center'>Learning</h3>
                    <div className='flex justify-center flex-wrap gap-2 py-5'>
                      <Image src={icon_django} alt="Django" />
                      <Image src={icon_flask} alt="Flask" />
                      <Image src={icon_php} alt="PHP" />
                      <Image src={icon_typescript} alt="Typescript" />
                    </div> 
                  </div>  

                  {/* Frameworks */}
                  <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
                    <h3 className='text-2xl font-bold text-center'>Frameworks</h3>
                    <div className='flex justify-center flex-wrap gap-2 py-5'>
                      <Image src={icon_electron} alt="Electron" />
                      <Image src={icon_nextjs} alt="NextJS" />
                      <Image src={icon_react} alt="React" />
                      <Image src={icon_tailwind} alt="Tailwind" />
                      <Image src={icon_vue} alt="Vue" />
                      
                    </div> 
                  </div>  

                  {/* Platforms and Tools */}
                  <div className='bg-white text-black rounded-xl shadow-lg p-4 my-5 sm:p-10 sm:my-10'>
                    <h3 className='text-2xl font-bold text-center'>Platforms and Tools</h3>
                    <div className='flex justify-center flex-wrap gap-2 py-5'>
                      <Image src={icon_docker} alt="Docker" />
                      <Image src={icon_git} alt="Git" />
                      <Image src={icon_nodejs} alt="NodeJS" />
                      <Image src={icon_rasp} alt="Raspberry Pi" />
                      <Image src={icon_rstudio} alt="R Studio" />
                      <Image src={icon_tableau} alt="Tableau" />
                      <Image src={icon_vscode} alt="VS Code" />
                    </div> 
                  </div>  
        </div>
        
    </div>
</div>
  )
}

export default Techstack