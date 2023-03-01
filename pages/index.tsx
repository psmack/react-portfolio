import Head from 'next/head'
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

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Techstack from '../components/Techstack';



export default function Home() {
   return (
    <div>
      <Head>
        <title>Pailin Mack Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Pailin Mack' title='Developer and Coffee Euthusiast' message="This is my digital portfolio, where I share what I have learned." />
      <About />
      <Projects />
      <Techstack />
    </div>
  )
}
