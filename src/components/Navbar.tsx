import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'

const Navbar = () => {
	const [active, setActive] = useState('')
	const [toggle, setToggle] = useState(false)
	useEffect(() => {}, [])

	const handleClick = () => {
		setActive('')
		window.scrollTo(0, 0)
	}

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to={'/'}
					className='flex items-center gap-2'
					onClick={handleClick}
				>
					<img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='text-white text-[18px] font-bold cursor-pointer'>
						Dastan <span className='sm:inline-flex block'>Chynybek uulu</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map(nav => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? 'text-white' : 'text-secondary'
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle(prev => !prev)}
					/>

					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className='list-none flex flex-col justify-end items-start gap-4'>
							{navLinks.map(nav => (
								<li
									key={nav.id}
									className={`${
										active === nav.title ? 'text-white' : 'text-secondary'
									} font-poppins text-[16px] font-medium cursor-pointer`}
									onClick={() => {
										setToggle(prev => !prev)
										setActive(nav.title)
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
