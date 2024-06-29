import React, { Suspense } from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import { Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './Loader'
const AnimatePages = () => {
    const location=useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
        </AnimatePresence>
    </>
  )
}

export default AnimatePages
