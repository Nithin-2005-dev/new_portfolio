import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
const BlogCard = ({blog}) => {
  return (
    <motion.div initial={{x:-5}} whileInView={{x:0,transition:{
      type:"spring",
      stiffness:1000,
      damping:5,
      staggerChildren:1,
    }}} viewport={{
      amount:1
    }} className={`text-white flex flex-col text-center ${window.innerWidth<700?'w-3/4':'w-1/2'} blog-card m-4`}>
        <p className='text-xl uppercase font-bold underline' style={{color:"#F7E7DC"}}>{blog.title}</p>
        <motion.p 
        initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1,transition:{
      duration:1,
      delayChildren:1,
    }}} viewport={{
      amount:1
    }}
        className='text-start font-serif italic text-lg text-rose-950 p-2 font-semibold' >{blog.body}</motion.p>
        {blog.source && <a href={blog.source} target='_blank' className='text-3xl mx-4 my-2' style={{color:"#FFF8F3"}}><FaGithub /></a>}
    </motion.div>
  )
}

export default BlogCard
