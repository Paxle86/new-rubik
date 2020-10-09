import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledP = styled.p`
	color: red;
`
const Logo = () => {
	return (
		<div>
			<Link to='/'>
				<StyledP >Rubik Interior</StyledP>
			</Link>
		</div>
	)
}

export default Logo
