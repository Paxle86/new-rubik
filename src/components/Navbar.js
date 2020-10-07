import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<ul className='nav-list'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/about'>
					<li>About</li>
				</Link>
				<Link to='/works'>
					<li>Works</li>
				</Link>
				<Link to='/contact'>
					<li>Contact</li>
				</Link>
			</ul>
		</>
	)
}

export default Navbar
