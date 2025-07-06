import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useTexture } from '@react-three/drei'
import * as THREE from "three" 
import { Trail } from '@react-three/drei'
import Loader from './Loader'

function Sun(){
    const texture = useTexture('sun.jpg')
    const ref = useRef()
    
    return <mesh ref={ref} position={[0,0,0]}>
      <sphereGeometry args={[2,32]} />
      <meshStandardMaterial map={texture} transparent={true} opacity={0.8}/>
      <Text
      position={[0,2.6,0]}
      >
        Sun
      </Text>
    </mesh>
}

function Planet({img,speed,x,size,h,name}){
    const texture = useTexture(img)
    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*speed)*x 
      ref.current.position.z = Math.sin(currentPos*speed)*x
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
      <mesh ref={ref} position={[x,0,0]}>
        <sphereGeometry args={[size,32]} />
        <meshStandardMaterial map={texture} />
        <Text
          position={[0,h,0]}
          scale={0.5}
          >
            {name}
          </Text>
      </mesh>
    </Trail>)
}

function Solar() {
  
  return (
    <div className='bg-black w-screen h-screen'>
        <Canvas camera={{ position:[0,20,40], fov:50 }} >
          <Suspense fallback={ <Loader /> }>
            <group>
            <OrbitControls minDistance={5} maxDistance={40} enableRotate={true} enableZoom={true} enablePan={true} />
            {/* // mouseButtons={{ LEFT: 2, RIGHT:0 }} touches={{ ONE : THREE.TOUCH.PAN , TWO : THREE.TOUCH.DOLLY_PAN }} /> */}
              <ambientLight intensity={1} />
              <Sun />
              <Planet img='mercury.jpg' speed={0.25} x={3} size={0.25} h={0.5} name="Mercury" />
              <Planet img='venus.jpg' speed={0.3} x={4} size={0.3} h={0.6} name="Venus" />
              <Planet img='earth.jpg' speed={0.20} x={5.5} size={0.4} h={0.7} name="Earth" />
              <Planet img='mars.jpg' speed={0.35} x={7} size={0.35} h={0.7} name="Mars" />
              <Planet img='jupyter.jpg' speed={0.41} x={9} size={1.2} h={1.7} name="Jupyter" />
              <Planet img='saturn.jpg' speed={0.30} x={12} size={1.4} h={1.8} name="Saturn" />
              <Planet img='uranus.jpg' speed={0.25} x={14} size={0.6} h={0.9} name="Uranus" />
              <Planet img='neptune.jpg' speed={0.35} x={16} size={0.5} h={0.8} name="Neptune" />
            </group>
          </Suspense>
         </Canvas> /
    </div>
  )
}

export default Solar