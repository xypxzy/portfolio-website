/* eslint-disable react-refresh/only-export-components */
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { EarthCanvas } from '.'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../motion'
import { styles } from '../styles'

const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		emailjs
			.send(
				'service_xh0cshf',
				'template_rrpqu2a',
				{
					from_name: form.name,
					to_name: 'Dastan',
					from_email: form.email,
					to_email: 'chynybekuuludastan@gmail.com',
					message: form.message,
				},
				'dUzh1NI17GYr8hVkB'
			)
			.then(
				() => {
					setLoading(false)
					alert('Thank you. I will get back to you as soon as possible.')

					setForm({
						name: '',
						email: '',
						message: '',
					})
				},
				error => {
					setLoading(false)

					console.log(error)

					alert('Something went wrong')
				}
			)
	}

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>Contact.</h2>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label htmlFor='' className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='What your name?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label htmlFor='' className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='What your email?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label htmlFor='' className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Message</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='What do you want to say?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>

					<button
						type='submit'
						className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
