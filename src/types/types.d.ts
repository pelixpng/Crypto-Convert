type Coins = 'USDT' | 'BTC' | 'ETH'

interface JsonData {
	asset_id_base: string
	asset_id_quote: string
	rate: number
	time: string
	error: string
}
