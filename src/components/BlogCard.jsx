import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
const BlogCard = ({blog}) => {
  return (
    <motion.div  className={`text-white flex flex-col text-center ${window.innerWidth<700?'w-3/4':'w-1/2'} blog-card m-4`}>
        <p className='text-xl uppercase font-bold underline' style={{color:"#F7E7DC"}}>{blog.title}</p>
        <p className='text-start font-serif italic text-lg text-rose-950 p-2 font-semibold'>{blog.body}</p>
        {blog.source && <a href={blog.source} target='_blank' className='text-3xl mx-4 my-2' style={{color:"#FFF8F3"}}><FaGithub /></a>}
    </motion.div>
  )
}

export default BlogCard
