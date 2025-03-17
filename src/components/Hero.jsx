import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from './loader/CanvasLoader'
import { Computer } from './computer/Computer'
import { Environment, OrbitControls } from '@react-three/drei'

const Hero = () => {
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
                        <Computer />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero
