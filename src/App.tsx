import { BrowserRouter } from 'react-router-dom'
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from './components'

function App() {
	return (
		<BrowserRouter>
			<div className='relative z-o bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About idName='about' />
				<Experience idName='experience' />
				<Tech />
				<Works idName='work' />
				<Feedbacks idName='feedback' />
				<div className='relative z-0'>
					<Contact idName='contact' />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
