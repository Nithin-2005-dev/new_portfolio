import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Doll from './Doll'
import Bird from './Bird'
import { TorusGeometry } from 'three'
const DollModel = () => {
  return (
    <div style={{height:"100vh",width:"100vw"}}>
    <perspectiveCamera position={[0,0,0]}/>
      <Canvas className='bg-transpirant'>
    <Doll scale={2} position={[0,-0.5,1]} />
    {/* <Environment preset='studio'/> */}
    {/* <ambientLight args={["#ffffff",1]}/> */}
    <directionalLight args={["#ffffff",1]} position={[2,2,1]}/>
    <OrbitControls position={[0,0,0]}/>
    </Canvas>
    </div>
  )
}

export default DollModel
