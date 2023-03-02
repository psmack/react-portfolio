import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

const ProjectItem = ({ title, description, url }) => {
  return (
    <div className='relative'>
      <div className='repo-card '>
        <h4 className='repo-title'>{title}</h4>
        <div className='repo-text-box'>
          <p className='repo-desc'>{description}</p>
          <Link href={url} className='github-box'>
            <AiFillGithub className='github-icon'/>
          </Link>
        </div> 
      </div>
    </div>
  )
}

export default ProjectItem