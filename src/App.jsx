import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()
  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })
    return (
        <mesh>
           <cylinderGeometry args={[1, 1, 1]} />
           <meshLambertMaterial color='#468585' emissive='#468585' />
        </mesh>
    )
}

function App() {
    return (
        <>
            <Canvas
                style={{
                    width: '100vh',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate
                />
                <directionalLight
                    position={[1, 1, 1]}
                    intensity={10}
                    color={0x9cdba6}
                />
                <color attach="background" args={['#F0F0F0']} />
                <RotatingCube />
            </Canvas>
        </>
    )
}

export default App
