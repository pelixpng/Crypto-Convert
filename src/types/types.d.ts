type Coins = 'USDT' | 'BTC' | 'ETH'

interface InputCoins {
	coin1: Coins
	coin2: Coins
}

interface JsonData {
	asset_id_base: string
	asset_id_quote: string
	rate: number
	time: string
	error: string
}
