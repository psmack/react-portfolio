import React from 'react'
import Link from 'next/link'
import { AiFillGithub} from 'react-icons/ai'


const Projects = () => {
  return (
    <div className='background-image custom-img'> 
      {/* Projects Content */}
      <div className='page-format'>
        <h2 className='page-title'>Projects</h2>
        <div className='projects-nonmobile-format'>
          {/* C Projects */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>C Projects</h3>
              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>Mastermind</h4>
                  <p>
                    Mastermind game written in C.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/mastermind' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Data Analytics</h3>
                <div className='repo-card'>
                  <div className='repo-text-box'>
                    <h4 className='repo-title'>Dashboard Panel</h4>
                    <p>
                    Interactive analytic visualization dashboard in Python.
                    </p>
                    </div> 
                    <Link href='https://github.com/psmack/python-dashboard-panel' className='github-box'>
                      <AiFillGithub className='github-icon'/>
                    </Link>
                </div> 
            </div>
          </div>
        
          {/* Python Projects */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Python Projects</h3>
              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>Python Mini Projects</h4>
                  <p>
                    Collection of simple scripts using various Python libraries.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/Python-Mini-Projects' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div> 

              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>Youtube Music Downloader</h4>
                  <p>
                  Download song or album from Youtube Music using pytube library.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/youtube_downloader' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div> 
            </div>
          </div>

          {/* Web Dev */}
          <div className='projects-format'>
            <div className='projects-card'>
              <h3 className='projects-topic'>Web Dev</h3>
              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>Alliance</h4>
                  <p>
                    Twitter clone application for the Rebel Alliance using Electron and Vue frameworks. Deployable on Web, Windows, and Andriod.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/alliance' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div> 

              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>Next.js Website</h4>
                  <p>
                    Portfolio website using Next.js and Tailwind frameworks.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/react-portfolio' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div>
              <div className='repo-card'>
                <div className='repo-text-box'>
                  <h4 className='repo-title'>React Website</h4>
                  <p>
                    Portfolio website using React framework.
                  </p>
                </div> 
                <Link href='https://github.com/psmack/react-pmcodes' className='github-box'>
                  <AiFillGithub className='github-icon'/>
                </Link>
              </div> 
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