import React from 'react'
import {Watch} from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className='w-screen h-full flex flex-col justify-center content-center items-center '>
    <div>
    <Watch
  visible={true}
  height="100"
  width="100"
  radius="45"
  color="gold"
  ariaLabel="watch-loading"
  wrapperStyle={{margin:"0%"}}
  wrapperClass=""
  />
    </div>
  <div className='text-white playwrite-au-sa-p w-1/2 p-10 my-8'> Hang tight while we load an amazing 3D experience for you. Great things are worth the wait...</div>
    </div>
  )
}

export default Loader
