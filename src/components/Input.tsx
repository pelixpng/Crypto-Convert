import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { converter } from '../utils/Converter'
import { Dropdown } from 'react-native-element-dropdown'

interface Props {
	setInput: (value: string) => void
	input: string
	value: Coins
	items: CoinsList[]
	count: string
	quote: Coins
	setValue: (value: Coins) => void
	setItems: (value: CoinsList[]) => void
	onChangeValue: (value: string) => void
}

export interface CoinsList {
	label: Coins
	value: Coins
}

export const Input: FC<Props> = props => {
	return (
		<InputContainer>
			<TextInput
				keyboardType="numeric"
				placeholder="Введите текст"
				onChangeText={async text => {
					props.setInput(text)
					props.onChangeValue(await converter(text, props.value, props.quote))
				}}
				value={props.input}
			/>
			<Dropdown
				style={styles.dropdown}
				selectedTextStyle={styles.selectedTextStyle}
				data={props.items}
				maxHeight={300}
				labelField="label"
				valueField="value"
				value={props.value}
				iconColor="#cbcbcb"
				onChange={async item => {
					props.setValue(item.value)
					props.onChangeValue(
						await converter(props.count, item.value, props.quote)
					)
				}}
			/>
		</InputContainer>
	)
}

const InputContainer = styled.View`
	flex-direction: row;
	background-color: #f4f4f4;
	border-radius: 15px;
	width: 100%;
`
const TextInput = styled.TextInput`
	font-size: 14;
	height: 54px;
	width: 75%;
	border-right-width: 1px;
	border-color: #cbcbcb;
	padding-left: 10px;
	padding-right: 10px;
`

const styles = StyleSheet.create({
	dropdown: {
		width: '25%',
		height: 54,
		paddingHorizontal: 10
	},
	selectedTextStyle: {
		fontSize: 14
	},
	containerStyle: {
		backgroundColor: 'white'
	},
	itemTextStyle: {
		fontSize: 14
	}
})
