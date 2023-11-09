interface IExchangeRates {
	coin1: Coins
	coin2: Coins
}

export const getExchangeRates = async (params: IExchangeRates) => {
	const response = await fetch(
		`https://rest.coinapi.io/v1/exchangerate/${params.coin1}/${params.coin2}`,
		{
			headers: {
				'X-CoinAPI-Key': ''
			}
		}
	)
	const json = (await response.json()) as JsonData
	console.log(json)
	return json
}
