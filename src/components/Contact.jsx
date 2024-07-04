import { Canvas } from '@react-three/fiber';
import React, { Suspense, useContext, useRef, useState } from 'react'
import FlyingRobo from './FlyingRobo'
import { Environment, Html } from '@react-three/drei';
import { AnimationStore } from '../Store/AnimationStore';
import Loader from './Loader';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { motion,AnimatePresence } from 'framer-motion';
import { FaInstagram ,FaFacebook,FaLinkedin,FaGithub} from "react-icons/fa";
import Header from './Header';
import ConnectPage from './ConnectPage';
import AlreadyConnect from './AlreadyConnect';
const Contact = () => {
  const [open,setOpen]=useState(false)
  const [connected,setConnected]=useState(false)
  return (
    <>
    <header><Header/></header>
    <AnimatePresence>
    <motion.div className='flex flex-col'
     initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        duration:2,
      }
    }}
    exit={{
      opacity:0
    }}
    ><div><h2 className='text-center font-bold text-3xl font-mono text-neutral-50 m-3'>Connect with me</h2></div>
    <motion.div className='flex flex-row'layout
    >
    {connected?<AlreadyConnect setConnected={setConnected}/>: <ConnectPage setConnected={setConnected}/>}
    <motion.div className={`w-1/2`}
    initial={{
      y:-window.innerHeight
    }}
    animate={{
        y:0,
      transition:{
        type:"spring",
        stiffness:4,
        damping:2
      }
    }}
    exit={{
      y:window.innerHeight,
    }}
    >
    <div className='flex flex-wrap'>
    <Suspense fallback={<Loader/>} 
    >
    <Canvas style={{height:"100vh"}}>
      <FlyingRobo/>
      <Environment preset='studio'/>
    </Canvas>
    </Suspense>
    </div>
    <motion.div layout className={`text-white absolute text-center cursor-grab connect font-bold ${connected?'top-3/4 right-0':'right-0 z-50 opacity-100'} ${open?'top-1/2 left-1/4':''}`} onClick={()=>{setOpen(!open)}} style={{maxWidth:"50vw"}}>
    Why Connect with Me?
    {open && <ul className='text-start text-md' onClick={()=>{setOpen(!open)}}>
      <li><span className='text-pink-400'>Collaborate on Innovative Projects</span>: Combine skills and ideas to create something remarkable.</li>
      <li><span className='text-pink-400'>Expand Your Network</span>: Connect with like-minded individuals and professionals.</li>
      <li><span className='text-pink-400'>Share Insights and Inspiration</span>: Learn from diverse perspectives and experiences.</li>
      <li><span className='text-pink-400'>Grow Together</span>: Foster a community of continuous learning and mutual support.</li>
    </ul>}
    </motion.div>
    <div className={'flex flex-col fixed top-12 right-0.5 z-30'}>
    <a href='https://www.instagram.com/nithin__kumar2/' target='_blank'>
    <FaInstagram className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
    <a href='https://www.facebook.com/profile.php?id=100062150913192' target='_blank'>
    <FaFacebook className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}} />
    </a>
    <a href='https://www.linkedin.com/in/nithin-kumar-a922b82a3/' target='_blank'>
    <FaLinkedin className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
    <a href='https://github.com/Nithin-2005-dev' target='_blank'>
    <FaGithub className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
      </div>
    </motion.div>
    </motion.div>
    </motion.div>
    <ToastContainer/>
    </AnimatePresence>
    </>
  )
}

export default Contact
