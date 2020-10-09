import React from 'react'
import styled from 'styled-components';



const Wraper = styled.h1`
	color:red;
`

const Home = () => {

	return (
		<div>
			<Wraper className='logo'>
				Noi that Rubik
			</Wraper>
		</div>
	)
}

export default Home
