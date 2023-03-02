import React from 'react'
import Link from 'next/link'
import { AiFillGithub} from 'react-icons/ai'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='bg-img custom-img'> 
      {/* Projects Content */}
      <div className='page-format'>
        <h2 className='page-title'>Projects</h2>
        <div className='projects-nonmobile-format'>
          {/* C Projects */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>C Projects</h3>
              <ProjectItem 
                title='Mastermind'
                description='Mastermind game written in C.'
                url='https://github.com/psmack/mastermind'
              />
            </div>
          </div>

          {/* Data Analytics */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Data Analytics</h3>
              <ProjectItem 
                title='Dashboard Panel'
                description='Interactive analytic visualization dashboard in Python.'
                url='https://github.com/psmack/python-dashboard-panel'
              />
            </div>
          </div>
        
          {/* Python Projects */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Python Projects</h3>
              <ProjectItem 
                title='Python Mini Projects'
                description='ICollection of simple scripts using various Python libraries.'
                url='https://github.com/psmack/Python-Mini-Projects'
              />
              <ProjectItem 
                title='Youtube Music Downloader'
                description='Download song or album from Youtube Music using pytube library.'
                url='https://github.com/psmack/youtube_downloader'
              />
            </div>
          </div>

          {/* Web Dev */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Web Dev</h3>
              <ProjectItem 
                title='Alliance'
                description='Twitter clone application for the Rebel Alliance using Electron and Vue frameworks. Deployable on Web, Windows, and Andriod.'
                url='https://github.com/psmack/alliance'
              />
              <ProjectItem 
                title='Next.js Website'
                description='Portfolio website using Next.js and Tailwind frameworks.'
                url='https://github.com/psmack/react-portfolio'
              />
              <ProjectItem 
                title='React Website'
                description='Portfolio website using React framework..'
                url='https://github.com/psmack/react-pmcodes'
              />
            </div>
          {/* End of Web Dev */}
          </div> 
        </div>    
      {/* End of Projects Content */}
      </div>
    {/* End of Page */}
    </div>
  )
}

export default Projects