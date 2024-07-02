import React, { Suspense } from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import { Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './Loader'
import { Provider } from '../Store/AnimationStore'
const AnimatePages = () => {
    const location=useLocation();
  return (
    <Provider>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
        </AnimatePresence>
    </Provider>
  )
}

export default AnimatePages
