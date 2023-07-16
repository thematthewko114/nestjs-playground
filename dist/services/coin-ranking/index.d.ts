import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../../models/coin-ranking';
export declare class CoinRankingService {
    getCoins(): Promise<CoinRankingCoins | ErrorResponse>;
    getCoinHistory(id: string): Promise<CoinRankingHistory | ErrorResponse>;
}
