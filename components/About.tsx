import React from 'react'

const About = () => {
  return (
    <div className='bg-img custom-img'>        
        {/* About Content */}
        <div className='page-format'>
            <h2 className='page-title'>About</h2>
             {/* Education */}
            <div className="about-format">
              <div className='about-card'>
                <h3 className='about-topic'>Education</h3>
                <ul>
                  <li className='about-school-cert'>
                    University of Maryland Global Campus
                  </li>
                  <li>
                    Master of Science, Cybersecurity 
                  </li>
                  <li>
                    2019-Present
                  </li>
                </ul>
                <ul>
                  <li className='about-school-cert'>
                    UMBC Training Center
                  </li>
                  <li>
                    Certification, Computer Programming
                  </li>
                  <li>
                    2019-2020
                  </li>
                </ul>
                <ul>
                  <li className='about-school-cert'>
                    University of California, Riverside
                  </li>
                  <li>
                    Bachelor of Science, Bioengineering
                  </li>
                  <li>
                    2007-2011
                  </li>
                </ul>
              </div>
            </div>
            {/* Certification */}
            <div className="about-format">
              <div className='about-card'>
                <h3 className='about-topic'>Certification</h3>
                <ul>
                  <li className='about-school-cert'>
                    Google Data Analytics Professional Certification 
                  </li>
                  <li>
                    Issued: February 2023
                  </li>
                  <li className='about-school-cert'>
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
    </div>
  )
}

export default About