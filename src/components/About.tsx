/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from '../motion'
import { styles } from '../styles'

const ServiceCard = ({
	index,
	icon,
	title,
}: {
	index: number
	icon: string
	title: string
}) => {
	return (
		<Tilt>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<Tilt
					options={{ max: 45, scale: 1, speed: 450 }}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={icon} alt={title} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</Tilt>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0)}>
				<p className={styles.sectionSubText}>Introducing</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('right', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I'm a skilled software developer with experience in Typescript and
				JavaScript, and expertise in frameworks like React, Node.js and
				Three.js.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')
