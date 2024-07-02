import { Environment, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Computer from './Computer'
import AboutCard from './AboutCard'
import {AnimatePresence, motion} from 'framer-motion'
import Loader from './Loader'
const About = () => {
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
    <Canvas style={{height:"80vh"}}>
      <Computer scale={window.screen.width<900?window.screen.width/1000:window.screen.width/2000} position={[0,-1,1]} rotation={[0,-0.2,0]}></Computer>
      <Environment preset='city'/>
    </Canvas>
    </motion.div>
    </Suspense>
    </AnimatePresence>
   </>
  )
}

export default About
