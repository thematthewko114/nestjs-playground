import { Module } from '@nestjs/common';
import { AppController } from '../controllers';
import { AppService } from '../services';
import { CoinRankingController } from 'src/controllers/coin-ranking';
import { CoinRankingService } from 'src/services/coin-ranking.modules';

@Module({
  imports: [],
  controllers: [AppController, CoinRankingController],
  providers: [AppService, CoinRankingService],
})
export class AppModule {}
