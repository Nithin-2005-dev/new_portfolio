import React, { Suspense } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Loader from './components/Loader'
import AnimatePages from './components/AnimatePages'
const App = () => {
  return (
    <main className='bg-slate-900'>
      <Router>
      <Suspense fallback={ <Loader/>||<h1>Loading...</h1>}>
      <Header/>
      </Suspense>
      <AnimatePages/>
      </Router>
    </main>
  )
}

export default App
