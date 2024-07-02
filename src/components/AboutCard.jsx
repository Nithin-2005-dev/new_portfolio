import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { useScroll } from '@react-three/drei';
const AboutCard = ({direction,head,body}) => {
    const [isOpen,setOpen]=useState(false);
  return (
    <motion.div
    className={`bg-opacity-10 bg-slate-600 flex flex-wrap m-5 mx-10 justify-center content-center rounded-2xl shadow-2xl shadow-slate-500 ${isOpen?'w-1/2':'w-1/3'} ${direction%2==0?'self-end':'self-start'}`}
        initial={{x:direction%2==0?-window.innerWidth:window.innerWidth,
        opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1,transition:{duration:2}}}
        viewport={{
            amount:0.1,
        }}
        animate={{
            x:0,
            transition:{
                type:"spring",
                stiffness:100,
                damping:50,
                staggerChildren:1,
            }
        }}
        drag
        dragConstraints={{left:5, right:10, top:0,bottom:10}}
        whileDrag={{
            scale:0.8,
            opacity:0.5
        }}
        whileTap={{
            scale:0.8,
        }}
        whileHover={{
            scale:1.08,
            // boxShadow:"0rem 0rem 5rem red",
            transition:{
                duration:10,
            }
        }}
    >

    <motion.div className='text-white font-bold uppercase p-4 cursor-grab ubuntu-bold' onClick={()=>{setOpen(!isOpen)
     }}
    >{head}</motion.div>
    { isOpen && <motion.div initial={{opacity:0}}
     animate={{
        opacity:1,
        transition:{
            delay:0.5,
            duration:2,
        }
     }} className='p-5 text-orange-300 cursor-pointer ubuntu-light-italic' onClick={()=>{setOpen(!isOpen)}}>{body}</motion.div>}
    </motion.div>
  )
}

export default AboutCard
