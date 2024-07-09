import { Environment, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useState } from 'react'
import AboutCard from './AboutCard'
import Robo from './Robo'
import {AnimatePresence, motion} from 'framer-motion'
import Loader from './Loader'
import { AnimationStore } from '../Store/AnimationStore'
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiThreedotjs } from "react-icons/si";
import { TbCircleLetterC } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header'
const About = () => {
  const {animationChanger,message}=useContext(AnimationStore)
  const data=[{id:1,head:"Innovator at heart",body:"As an innovator at heart, I am constantly exploring new ideas and pushing boundaries. My passion for creativity drives me to develop unique solutions and transform concepts into reality. I thrive on challenges and believe in the power of innovation to make a meaningful impact"},
  {id:2,head:"Creative problem solver",body:"Creative problem solver with a knack for thinking outside the box. I approach challenges with a blend of creativity and analytical thinking, crafting innovative solutions that address complex issues. My goal is to find effective and imaginative ways to overcome obstacles and achieve success."},
  {id:3,head:"Designs with purpose",body:"Designs with purpose, focusing on creating meaningful and impactful experiences. Every project I undertake is driven by a clear vision and a commitment to delivering value. I believe in the power of purposeful design to inspire, engage, and make a difference."},
{
  id:4,
  head:"Ideas into reality",
  body:"Turning ideas into reality by bridging creativity and execution. I am passionate about taking abstract concepts and transforming them into tangible, impactful outcomes. With a keen eye for detail and a commitment to excellence, I bring visions to life through innovative solutions and meticulous craftsmanship"
},
{
  id:5,
  head:"Art meets technology",
  body:"Art meets technology in my work, where creativity and innovation converge. I fuse artistic expression with cutting-edge technology to create immersive and engaging experiences. By combining aesthetics with functionality, I strive to push the boundaries of what's possible and deliver truly unique and impactful solutions"
},
{
  id:6,
  head:"Inspired by innovation",
  body:"Crafting unique experiences that captivate and inspire. I am dedicated to creating one-of-a-kind projects that stand out and make a lasting impression. By blending creativity with strategic thinking, I deliver experiences that are both memorable and impactful."
}
]
  return (
    <>
    <header><Header/></header>
    <section>
    <AnimatePresence>
    <motion.div className='flex flex-col' initial={{opacity:0,y:window.innerHeight}}
    animate={{opacity:1,y:0,
    transition:{
      duration:2
    }
    }}
    exit={{opacity:0,
    }}
    >
    {data.map((index)=>{
      return <AboutCard direction={index.id} head={index.head} body={index.body} key={index}/>
    })}
    </motion.div>
    <Suspense fallback={<Loader/>}>
    <motion.div initial={{opacity:0}} whileInView={{
      opacity:1,
      transition:{
        duration:3,
      }
    }}
    viewport={{
      amount:0.5,
      once:false
    }}
    >
    </motion.div>
    <ToastContainer/>
<ToastContainer />
    <div className='flex flex-wrap'>
    <Canvas style={{height:"100vh",width:"50vw"}}>
     <Robo message={message}/>
      <Environment preset='city'/>
    </Canvas>
    <div className="flex flex-wrap justify-center text-white text-6xl rounded-lg content-center"  style={{height:"100vh",width:"40vw"}}>
      <div className="self-center text-center font-bold [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_100%)] cursor-pointer w-full">skills</div>
      <MdHtml className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(2)
      
    }
      }/>
      <MdCss className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(5)
      
    }
      }/>
      <AiOutlineJavaScript className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(6)
      
    }
      }/>
      <FaJava className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(7)
      
    }
      } />
      <FaReact className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(8)
      
    }
      } />
      <IoLogoFirebase className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(11)
      
      }}/>
      <RiTailwindCssFill className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(13)
      
      }}/>
      <RiBootstrapLine className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(14)
      
      }}/>
      <SiAdobephotoshop className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(20)
      
      }}/>
      <TbCircleLetterC className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(23)
      
      }}/>
      <SiThreedotjs className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(24)
      
      }}/>
      <SiFramer className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(25)
      
      }}/>
      <FaGithub className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(16)
      
      }}/>
      <FaGitAlt className={`shadow-skill m-2 hover:scale-110 cursor-grab`} onClick={()=>{animationChanger(27)
      
      }}/>
      </div>
      </div>
    </Suspense>
    </AnimatePresence>
    </section>
   </>
  )
}
export default About
