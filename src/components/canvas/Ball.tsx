import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'

interface BallProps {
	imgUrl: string
}

const Ball = (props: BallProps) => {
	const [decal] = useTexture([props.imgUrl])
	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 0.5]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-3}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					map={decal}
				/>
			</mesh>
		</Float>
	)
}

const BallCanvas = ({ icon }: { icon: string }) => {
	return (
		<Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default BallCanvas
