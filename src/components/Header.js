import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import './Header.scss'
import { motion } from 'framer-motion'

const Header = () => {
	return (
		<motion.div className='header-container'>
			<Logo />

			<Navbar />
		</motion.div>
	)
}

export default Header
