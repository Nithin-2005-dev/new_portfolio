import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Skull from './Skull';
import { Environment } from '@react-three/drei';
import { Html } from '@react-three/drei';
import Card from './Card';
const SkullModel = () => {
  return (
    <Canvas style={{height:"80vh"}} className='cursor-crosshair'>
    <perspectiveCamera position={[0,0,0]}/>
      <Skull
      rotation={[0,Math.PI/2*-1,0]}/>
      <Environment preset='studio'/>
    </Canvas>
  )
}

export default SkullModel
