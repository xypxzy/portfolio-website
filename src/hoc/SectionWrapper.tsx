import { motion } from 'framer-motion'
import React from 'react'
import { staggerContainer } from '../motion'
import { styles } from '../styles'

interface Props {
	idName: string
}

const SectionWrapper =
	<P extends object>(
		Component: React.ComponentType<P>,
		idName: string
	): React.FC<P & Props> =>
	(props: Props) => {
		return (
			<motion.section
				variants={staggerContainer(0, 0)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className='hash-span' id={idName}>
					&nbsp;
				</span>
				<Component {...(props as P)} />
			</motion.section>
		)
	}

export default SectionWrapper
