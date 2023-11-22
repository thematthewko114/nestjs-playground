type TestResponse = {
    message: string;
}

type CoinRankingCoins = {
    stats: Object;
    coins: Object[]
}

type CoinRankingHistory = {
    change: string;
    history: Object[]
}

type ErrorResponse = {
    message: string;
}

export { TestResponse, CoinRankingCoins, CoinRankingHistory, ErrorResponse }