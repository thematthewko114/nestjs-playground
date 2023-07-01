import { CoinRankingService } from '../services/coin-ranking.modules';
import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../models';
export declare class CoinRankingController {
    private readonly coinRankingService;
    constructor(coinRankingService: CoinRankingService);
    getCoins(): Promise<CoinRankingCoins | ErrorResponse>;
    getCoinHistory(id: any): Promise<CoinRankingHistory | ErrorResponse>;
}
