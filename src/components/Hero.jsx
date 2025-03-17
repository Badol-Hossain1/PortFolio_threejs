import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from './loader/CanvasLoader'
import { Computer } from './computer/Computer'
import { Environment, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

const Hero = () => {
    const {
        positionX,
        positionY,
        positionZ,
        rotationX,
        rotationY,
        rotationZ,
        scale,
    } = useControls('Model Controls', {
        positionX: { value: 0, min: -5, max: 5, step: 0.1 },
        positionY: { value: 0, min: -5, max: 5, step: 0.1 },
        positionZ: { value: 0, min: -5, max: 5, step: 0.1 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
        rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
        scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
    })
    return (
        <section className="min-h-screen w-full flex flex-col  relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="text-white font-bold text-sm sm:text-3xl text-center">
                    hi am badol hossain
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Environment preset="studio" />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<CanvasLoader />}>
                        <OrbitControls />
                        <Computer
                            position={[positionX, positionY, positionZ]}
                            rotation={[rotationX, rotationY, rotationZ]}
                            scale={scale}
                        />
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.5}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero
