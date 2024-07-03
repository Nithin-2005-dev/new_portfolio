/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Gamer2133 (https://sketchfab.com/Gamer2133)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/project-playtime-robo-boxy-boo-65d60c0a89a94ca7b1b918c8dace0cd8
Title: Project Playtime: Robo-boxy Boo
*/
import { FaMessage } from "react-icons/fa6";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { AnimationStore } from '../Store/AnimationStore'
export default function Model(props) {
    let robo_scale=window.screen.width<900?7:12
    const [showMsg,setMsg]=useState(true);
    const {animation}=useContext(AnimationStore)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/robo.glb')
  const { actions,names } = useAnimations(animations, group)
  useEffect(()=>{
    actions[names[animation]].fadeOut(5).play();
  },[animation])
  return (
    <group ref={group} {...props} dispose={null} scale={robo_scale} position={[0,-1,0]}>
   {showMsg && <Html position={[0.07,0.3,0.1]} className="text-3xl text-zinc-100 robo-msg cursor-pointer"><FaMessage onClick={()=>{
   props.message("info")
    setMsg(!showMsg)
   }}/></Html>}
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_158"
          geometry={nodes.Object_158.geometry}
          material={materials['blackocclusion_MAT.001']}
          skeleton={nodes.Object_158.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_161"
          geometry={nodes.Object_161.geometry}
          material={materials.MI_RobotBoxyBody}
          skeleton={nodes.Object_161.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_164"
          geometry={nodes.Object_164.geometry}
          material={materials.MI_RobotBoxyGlow}
          skeleton={nodes.Object_164.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_167"
          geometry={nodes.Object_167.geometry}
          material={materials.MI_RobotBoxyHead}
          skeleton={nodes.Object_167.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/robo.glb')