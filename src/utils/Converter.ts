import { getExchangeRates } from '../api/coinApi'

export const converter = async (value: string, base: Coins, quote: Coins) => {
	const rate = await getExchangeRates({ coin1: base, coin2: quote })
	if (rate?.rate) {
		return (+value * rate.rate).toFixed(6).toString()
	} else {
		return 'Ошибка'
	}
}
