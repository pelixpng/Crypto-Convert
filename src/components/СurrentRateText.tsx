import React, { useMemo, useState } from 'react'
import styled from 'styled-components/native'
import { getExchangeRates } from '../api/coinApi'

interface ICurrentText {
	currency1: Coins
	currency2: Coins
}

export const CurrentRateText: React.FC<ICurrentText> = props => {
	const [rate, setRate] = useState<JsonData>()
	useMemo(async () => {
		setRate(
			await getExchangeRates({ coin1: props.currency1, coin2: props.currency2 })
		)
	}, [props.currency1, props.currency2])
	if (rate?.error) {
		return <TextInfo>{rate?.error}</TextInfo>
	} else {
		const date = rate?.time.substring(0, 10) // достаем первые 10 символов - дату
		const time = rate?.time.substring(11, 19) // достаем символы с 11 по
		return (
			<TextInfo>
				1 {rate?.asset_id_base} = {rate?.rate} {rate?.asset_id_quote}
				{`\n`}
				{date && date}
				{`\n`}
				{time && time}
			</TextInfo>
		)
	}
}

const TextInfo = styled.Text`
	border-color: black;
	font-size: 14;
	font-style: normal;
	font-weight: 500;
	color: grey;
`
