import { getExchangeRates } from '../api/coinApi'

export const converter = async (value: any, base: Coins, quote: Coins) => {
	const rate = await getExchangeRates({ coin1: base, coin2: quote })
	return (value * rate.rate).toFixed(6).toString()
}
