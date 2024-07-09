import React, { Suspense, useContext, useState } from 'react'
import HelloRobo from './HelloRobo'
import {AnimatePresence, motion} from 'framer-motion'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { AnimationStore } from '../Store/AnimationStore'
import { MdOutlinePower ,MdOutlinePowerOff} from "react-icons/md";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";
const Home = () => {
  const {roboOn,setRobo,setPosition,position}=useContext(AnimationStore)
  return (<>
    <section>
    <header><Header/></header>
     <motion.div className="flex flex-wrap"
     initial={{opacity:0,y:window.innerHeight,
     }}
     animate={{opacity:1,y:0,
     transition:{
      duration:2,
     }
     }}
    exit={{opacity:0,
    
    }}
     >
    <Suspense fallback={<Loader/>}>
    <Canvas style={{height:"90vh"}}>
    <HelloRobo scale={window.innerWidth<500?3.5:6} />
    <Environment preset='studio'/>
    </Canvas>
    {(position=="front" && roboOn) && <><div style={{right:"25%"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800 virtual w-1/2'>
      <p className='text-sm text-emerald-50 font-extrabold z-30 border p-4 bodoni-moda-sc shadow-md shadow-white robot md:text-2xl opacity-100 '>Hello, I'm  Nithin. I am currently pursuing a B.Tech in Electrical Engineering at NIT Silchar. I have a strong interest in web development. I am eager to continue exploring and growing in the web development domain.
      <br></br>
</p>
    </div>
    <span className='inline-block justify-center text-sm text-white absolute bg-gray-500 bg-opacity-50 rounded-lg p-2 font-mono font-extrabold w-1/4 md-text-xl text-center' style={{top:"80%",left:"37.5%"}}>
      <a href='https://online.publuu.com/576350/1293671' target='_blank' className='text-center'>Resume</a>
      </span></>}
    {(position=="right" && roboOn) && <div style={{width:"25vw",right:"2%"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800 virtual '>
      <p className='text-xs text-emerald-50 font-bold z-30 border-0 p-4 bodoni-moda-sc shadow-lg shadow-slate-600 robot md:text-2xl'>
      Enjoy exploring my portfolio with its immersive 3D experience. Dive in and discover the projects I've been working on. Enjoy your visit!
</p>
    </div>}
    {(position=="left" && roboOn) && <div style={{width:"25vw"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800 left-2 virtual '>
      <p className='text-xs text-emerald-50 font-bold z-30 border-0 p-4 bodoni-moda-sc shadow-lg shadow-slate-600 robot md:text-2xl'>Welcome!<br></br>
I'm thrilled to have you here. Enjoy exploring and feel free to reach out with any questions. Happy browsing!
</p>
    </div>}
    {!roboOn &&<div className='absolute text-white uppercase text-center flex flex-col justify-center items-center content-center w-1/2'  style={{top:"70%",right:"25%"}}>
      <div className='font-bold font-serif'>Welcome to my portfolio.Where the creativity meets passion....</div>
      <div className='text-center capitalize font-thin text-red-400'>turn on the robo and rock the visit!!!</div>
      </div>}
      <button className='fixed top-8 left-0 text-white text-4xl m-3 rotate-90'>{!roboOn?<MdOutlinePower onClick={()=>{setRobo(!roboOn)}} className=''/>:<MdOutlinePowerOff  onClick={()=>{setRobo(!roboOn)}} className='text-red-600'/>}</button> 
      <div className='absolute top-20 left-1/2 text-white text-6xl -mx-14 flex flex-row'>
        <button><IoMdArrowDropleft onClick={()=>{setPosition("left")}} style={{color:position=="left"?'green':'white'}}/></button>
        <button><FaDotCircle onClick={()=>{setPosition("front")}} className='text-4xl my-3 -mx-2' style={{color:position=="front"?'green':'white'}}/></button>
        <button><IoMdArrowDropright onClick={()=>{setPosition("right")}} style={{color:position=="right"?'green':'white'}}/></button>
      </div>
    </Suspense>
      </motion.div>
    </section>
    </>
  )
}

export default Home
