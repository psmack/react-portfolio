import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

const ProjectItem = ({ title, description, url }) => {
  return (
    <div className='relative'>
      <div className='repo-card'>
        <div className='repo-text-box'>
          <h4 className='repo-title'>{title}</h4>
          <p className='repo-desc'>{description}</p>
          </div> 
          <Link href={url} className='github-box'>
            <AiFillGithub className='github-icon'/>
          </Link>
        </div>
    </div>
  )
}

export default ProjectItem