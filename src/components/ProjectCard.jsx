import React from 'react'
import { FaLink } from "react-icons/fa";
import { MdOutlineSource } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
const ProjectCard = ({project}) => {
  return (
    <section>
    <div className='cursor-pointer'>
    <div className='flex justify-center flex-wrap'>
      {project.technologies.map((icon)=>{
        return <div className='text-3xl mx-3 text-rose-300 ' style={{ borderRadius:"50%"}}>{icon}</div>
      })}
    </div>
      <p className='text-center font-bold font-serif text-yellow-200' style={{fontSize:"1.5rem",textShadow:"0rem 0rem 0.5rem 5rem #e2cc8a"}}>{project.title}</p>
      <p className='text-rose-950' style={{fontWeight:"900"}}>{project.dec}</p>
      <div className='flex justify-between content-center items-center'>
      <a href={project.source} target='_blank'>
      <button className='btn my-3 text-slate-700 font-extrabold '>Source code<MdOutlineSource className='inline-block m-2'/></button>
      </a>
      <a href={project.link} target='_blank'>
      <button className='btn m-2 text-slate-700 font-extrabold'>website link<FaLink className='inline-block m-2'/></button>
      </a>
      </div>
    </div>
    </section>
  )
}

export default ProjectCard
