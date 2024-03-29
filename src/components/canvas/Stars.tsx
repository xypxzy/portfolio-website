import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.cjs'
import { Suspense, useRef } from 'react'

const Stars = () => {
	const ref = useRef(null)

	const sphere = random.inSphere(new Float64Array(5000), { radius: 1.2 })
	const sphere32 = new Float32Array(sphere)

	useFrame((_, delta) => {
		if (ref.current) {
			const currentRef = ref.current as { rotation: { x: number; y: number } }
			currentRef.rotation.x -= delta / 10
			currentRef.rotation.y -= delta / 15
		}
	})

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere32} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color='#f272c8'
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	)
}

const StarsCanvas = () => {
	return (
		<div className='w-full h-auto absolute inset-0 z-[-1]'>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	)
}

export default StarsCanvas
