import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { FC, useState } from 'react'
import { CoinsList, Input } from './Input'

interface Converter {
	currency1: Coins
	currency2: Coins
	setСurrency1: (value: Coins) => void
	setСurrency2: (value: Coins) => void
}

export const Converter: FC<Converter> = props => {
	const [value1, setValue1] = useState('0')
	const [value2, setValue2] = useState('0')
	const [items, setItems] = useState<CoinsList[]>([
		{ label: 'USDT', value: 'USDT' },
		{ label: 'BTC', value: 'BTC' },
		{ label: 'ETH', value: 'ETH' }
	])
	return (
		<ConverterContainer>
			<Input
				input={value1}
				setInput={setValue1}
				value={props.currency1}
				items={items}
				setValue={props.setСurrency1}
				setItems={setItems}
				onChangeValue={setValue2}
				count={value1}
				quote={props.currency2}
			/>
			<MaterialCommunityIcons name="arrow-expand" size={30} color="#5d5c5c" />
			<Input
				input={value2}
				setInput={setValue2}
				value={props.currency2}
				items={items}
				setValue={props.setСurrency2}
				setItems={setItems}
				onChangeValue={setValue1}
				count={value2}
				quote={props.currency1}
			/>
		</ConverterContainer>
	)
}

const ConverterContainer = styled.View`
	align-items: center;
	width: 100%;
	gap: 12px;
`
