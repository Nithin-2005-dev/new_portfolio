import React, { Suspense } from 'react'
import SkullModel from './SkullModel'
import Card from './Card'
import {AnimatePresence, motion} from 'framer-motion'
import Loader from './Loader'
const Home = () => {
  return (
    <section>
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
      <SkullModel/>
      <Card/>
    </Suspense>
      </motion.div> 
    </section>
  )
}

export default Home
