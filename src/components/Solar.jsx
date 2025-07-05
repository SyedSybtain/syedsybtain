import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useTexture } from '@react-three/drei'
import * as THREE from "three" 
import { Trail } from '@react-three/drei'

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

  function Mercury(){
    const texture = useTexture('mercury.jpg')
    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.5)*3 
      ref.current.position.z = Math.sin(currentPos*0.5)*3
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
      <mesh ref={ref} position={[3,0,0]}>
        <sphereGeometry args={[0.2,32]} />
        <meshStandardMaterial map={texture} />
        <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Mercury
          </Text>
      </mesh>
    </Trail>)
  }
  function Venus(){
    const texture = useTexture('venus.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.3) *4
      ref.current.position.z = Math.sin(currentPos*0.3) *4
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[4,0,0]}>
      <sphereGeometry args={[0.3,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Venus
          </Text>
    </mesh></Trail>)
  }
  function Earth(){
    const texture = useTexture('earth.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.27) *5
      ref.current.position.z = Math.sin(currentPos*0.27) *5
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[5,0,0]}>
      <sphereGeometry args={[0.5,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Earth
          </Text>
    </mesh></Trail>)
  }
  function Mars(){
    const texture = useTexture('mars.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.13) *6
      ref.current.position.z = Math.sin(currentPos*0.13) *6
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[6,0,0]}>
      <sphereGeometry args={[0.4,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Mars
          </Text>
    </mesh></Trail>)
  }
  function Jupyter(){
    const texture = useTexture('jupyter.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.47) *8
      ref.current.position.z = Math.sin(currentPos*0.47) *8
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[8,0,0]}>
      <sphereGeometry args={[1,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.4,0]}
          scale={0.5}
          >
            Jupyter
          </Text>
    </mesh></Trail>)
  }
  function Saturn(){
    const texture = useTexture('saturn.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_, delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.35) *11
      ref.current.position.z = Math.sin(currentPos*0.35) *11
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[11,0,0]}>
      <sphereGeometry args={[1.2,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.8,0]}
          scale={0.5}
          >
            Saturn
          </Text>
    </mesh></Trail>)
  }
  function Uranus(){
    const texture = useTexture('uranus.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.3)*13
      ref.current.position.z = Math.sin(currentPos*0.3)*13
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
      <mesh ref={ref} position={[13,0,0]}>
        <sphereGeometry args={[0.5,32]} />
        <meshStandardMaterial map={texture}  />
        <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Uranus
          </Text>
      </mesh>
    </Trail>)
  }
  function Neptune(){
    const texture = useTexture('neptune.jpg')

    const ref = useRef()
    let currentPos = 0
    useFrame((_,delta) => {
      currentPos += delta
      ref.current.position.x = Math.cos(currentPos*0.2) *15
      ref.current.position.z = Math.sin(currentPos*0.2) *15
    })
    return (
    <Trail width={3} length={100} attenuation={(val) => val}>
    <mesh ref={ref} position={[15,0,0]}>
      <sphereGeometry args={[0.5,32]} />
      <meshStandardMaterial map={texture}  />
      <Text
          position={[0,1.2,0]}
          scale={0.5}
          >
            Neptune
          </Text>
    </mesh></Trail>)
  }

function Solar() {

  return (
    <div className='bg-black w-screen h-screen'>
        <Canvas camera={{ position:[0,20,40], fov:50 }} >
          <Suspense fallback={null}>
          <group>
          <OrbitControls minDistance={5} maxDistance={40} enableRotate={true} enableZoom={true} enablePan={true} />
          {/* // mouseButtons={{ LEFT: 2, RIGHT:0 }} touches={{ ONE : THREE.TOUCH.PAN , TWO : THREE.TOUCH.DOLLY_PAN }} /> */}
          <ambientLight intensity={1} />
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Mars />
          <Jupyter />
          <Saturn />
          <Uranus />
          <Neptune />
          </group>
          </Suspense>
         </Canvas> /
    </div>
  )
}

export default Solar