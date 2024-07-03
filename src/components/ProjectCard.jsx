import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className=''>
    <div className='flex justify-center flex-wrap'>
      {project.technologies.map((icon)=>{
        return <div className='text-2xl mx-3 text-slate-800 '>{icon}</div>
      })}
    </div>
      <p className='text-center font-bold text-pink-800 font-serif' style={{fontSize:"1.5rem"}}>{project.title}</p>
      <p className='text-slate-700 ' style={{fontWeight:"900"}}>{project.dec}</p>
    </div>
  )
}

export default ProjectCard
