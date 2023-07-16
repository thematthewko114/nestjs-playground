import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoinRankingService } from '../../services/coin-ranking';
import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../../models/coin-ranking';

@Controller("/coin-ranking")
export class CoinRankingController {
  constructor(private readonly coinRankingService: CoinRankingService) {}

  @Get("/coins")
  getCoins(): Promise<CoinRankingCoins | ErrorResponse> {
    return this.coinRankingService.getCoins();
  }
  
  @Get("/history?")
  getCoinHistory(@Query('id') id: any): Promise<CoinRankingHistory | ErrorResponse> {
    return this.coinRankingService.getCoinHistory(id);
  }
}
