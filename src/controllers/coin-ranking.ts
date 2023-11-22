import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoinRankingService } from '../services/coin-ranking.modules';
import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../models';

@Controller()
export class CoinRankingController {
  constructor(private readonly coinRankingService: CoinRankingService) {}

  @Get("/coin-ranking/coins")
  getCoins(): Promise<CoinRankingCoins | ErrorResponse> {
    return this.coinRankingService.getCoins();
  }
  
  @Get("/coin-ranking/history?")
  getCoinHistory(@Query('id') id: any): Promise<CoinRankingHistory | ErrorResponse> {
    return this.coinRankingService.getCoinHistory(id);
  }
}
