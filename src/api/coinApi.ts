import { API_TOKEN } from '../secrets/token'

export const getExchangeRates = async (params: InputCoins) => {
	try {
		const response = await fetch(
			`https://rest.coinapi.io/v1/exchangerate/${params.coin1}/${params.coin2}`,
			{
				headers: {
					'X-CoinAPI-Key': API_TOKEN
				}
			}
		)
		const json = (await response.json()) as JsonData
		return json
	} catch (error) {
		alert(error)
	}
}
