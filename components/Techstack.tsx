import React from 'react'
import Image from "next/image"
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

const Techstack = () => {
  return (
    <div className='bg-img custom-img'> 
    {/* Tech Stack Content */}
      <div className='page-format'>
        <h2 className='page-title'>Tech Stack</h2>
        <div className='techstack-nonmobile-format'>
          {/* Languages */}
          <div className='techstack-format'>
            <div className='techstack-card'>
              <h3 className='techstack-topic'>Languages</h3>
              <div className='techstack-items'>
                <Image src={icon_c} alt="" />
                <Image src={icon_python} alt="" />
                <Image src={icon_sql} alt="" />
                <Image src={icon_js} alt="" />
                <Image src={icon_html} alt="" />
                <Image src={icon_css} alt="" />
                <Image src={icon_r} alt="" />
              </div> 
            </div>
          </div>

          {/* Learning */}
          <div className='techstack-format'>
            <div className='techstack-card'>
              <h3 className='techstack-topic'>Learning</h3>
              <div className='techstack-items'>
                <Image src={icon_django} alt="Django" />
                <Image src={icon_flask} alt="Flask" />
                <Image src={icon_php} alt="PHP" />
                <Image src={icon_typescript} alt="Typescript" />
              </div> 
            </div>
          </div>
        
          {/* Frameworks */}
          <div className='techstack-format'>
            <div className='techstack-card'>
              <h3 className='techstack-topic'>Frameworks</h3>
              <div className='techstack-items'>
                <Image src={icon_electron} alt="Electron" />
                <Image src={icon_nextjs} alt="NextJS" />
                <Image src={icon_react} alt="React" />
                <Image src={icon_tailwind} alt="Tailwind" />
                <Image src={icon_vue} alt="Vue" />
              </div> 
            </div>
          </div>

          {/* Platforms and Tools */}
          <div className='techstack-format'>
            <div className='techstack-card'>
              <h3 className='techstack-topic'>Platforms and Tools</h3>
              <div className='techstack-items'>
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
      {/* End of Tech Stack Content */}
      </div>
    {/* End of Page */}
    </div> 
  )
}

export default Techstack