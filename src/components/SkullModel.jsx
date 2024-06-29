import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Skull from './Skull';
import { Environment } from '@react-three/drei';
import { Html } from '@react-three/drei';
import Card from './Card';
const SkullModel = () => {
  const currentWidth=window.screen.width;
  return (
    <Canvas style={{height:"80vh"}} className='cursor-crosshair'>
    <perspectiveCamera position={[0,0,0]}/>
      <Skull scale={currentWidth<900 ? currentWidth/100:window.screen.width/180} position={[0,-2,-1]} rotation={[0,Math.PI/2*-1,0]}/>
      <Environment preset='studio'/>
    </Canvas>
  )
}

export default SkullModel
