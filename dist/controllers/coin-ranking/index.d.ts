import { CoinRankingService } from '../../services/coin-ranking';
import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../../models/coin-ranking';
export declare class CoinRankingController {
    private readonly coinRankingService;
    constructor(coinRankingService: CoinRankingService);
    getCoins(): Promise<CoinRankingCoins | ErrorResponse>;
    getCoinHistory(id: any): Promise<CoinRankingHistory | ErrorResponse>;
}
