import { Platform } from 'react-native'
import styled from 'styled-components/native'
import React, { useState } from 'react'
import { CurrentRateText } from './СurrentRateText'
import { Converter } from './Converter'

export const Echange: React.FC = () => {
	const [currency1, setСurrency1] = useState<Coins>('BTC')
	const [currency2, setСurrency2] = useState<Coins>('USDT')
	return (
		<ExchangeContainer>
			<CurrentRateText currency1={currency1} currency2={currency2} />
			<Converter
				currency1={currency1}
				currency2={currency2}
				setСurrency1={setСurrency1}
				setСurrency2={setСurrency2}
			/>
		</ExchangeContainer>
	)
}

const ExchangeContainer = styled.View`
	width: 94%;
	padding: 15px;
	align-items: flex-start;
	gap: 12px;
	border-radius: 16px;
	background: white;
	align-self: center;
	margin-top: 10px;
	margin-bottom: 10px;
	${Platform.OS === 'android'
		? 'elevation: 4;'
		: 'shadow-color: rgba(0, 0, 0, 0.12); shadow-opacity: 1; shadow-radius: 4px; shadow-offset: 0px 4px;'}
`
