import { Canvas } from '@react-three/fiber'
import React from 'react'
import Grave from './Grave'
import { Environment, OrbitControls } from '@react-three/drei'
import Skull from './Skull'
import SkullModel from './SkullModel'
const GraveModel = () => {
  return (
    <>
    <Canvas style={{height:"90vh"}}>
    <OrbitControls enableRotate={false} enableZoom={false}/>
      <Grave scale={window.screen.width/4000} position={[1,-2,-5]}/>
    <Environment preset='studio'/>
    </Canvas>
    </>
  )
}

export default GraveModel
