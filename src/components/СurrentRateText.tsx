import React, { FC, useMemo, useState } from 'react'
import styled from 'styled-components/native'
import { getExchangeRates } from '../api/coinApi'

export const CurrentRateText: FC<InputCoins> = props => {
	const [rate, setRate] = useState<JsonData>()
	useMemo(async () => {
		setRate(await getExchangeRates({ coin1: props.coin1, coin2: props.coin2 }))
	}, [props.coin1, props.coin2])

	if (rate?.error) {
		return <TextInfo>{rate?.error}</TextInfo>
	} else {
		const date = rate?.time.substring(0, 10)
		const time = rate?.time.substring(11, 19)
		return (
			<TextInfoContainer>
				<TextInfo>
					1 {rate?.asset_id_base} = {rate?.rate.toFixed(8)}
					{rate?.asset_id_quote}
				</TextInfo>
				<TextInfo>
					{date && date} {time && time}
				</TextInfo>
			</TextInfoContainer>
		)
	}
}

const TextInfo = styled.Text`
	border-color: black;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	color: grey;
`

const TextInfoContainer = styled.View``
