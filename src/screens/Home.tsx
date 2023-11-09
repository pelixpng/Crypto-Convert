import React, { useMemo, useState } from 'react'
import styled from 'styled-components/native'
import { Echange } from '../components/Echange'

export const HomeScreen: React.FC = () => {
	return (
		<BackgroundContainer>
			<Echange />
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
