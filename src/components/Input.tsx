import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { converter } from '../utils/Converter'
import { Dropdown } from 'react-native-element-dropdown'

interface IInput {
	setInput: (value: any) => void
	input: string
	value: Coins
	items: ICoinsList[]
	count: any
	quote: Coins
	setValue: (value: any) => void // у влада спросить
	setItems: (value: any) => void
	onChangeValue: (value: string) => void
}

interface ICoinsList {
	label: string
	value: string
}

export const Input: React.FC<IInput> = props => {
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
				onChange={async item => {
					props.setValue(item.value)
					const tmp = item.value
					props.onChangeValue(await converter(props.count, tmp, props.quote))
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
