import React, { FC } from 'react'
import styled from 'styled-components/native'
import { Exchange } from '../components/Exchange'

export const HomeScreen: FC = () => {
	return (
		<BackgroundContainer>
			<Exchange />
		</BackgroundContainer>
	)
}

export const BackgroundContainer = styled.View`
	padding-top: 60px;
	background: white;
	height: 100%;
	width: 100%;
	align-items: center;
`
