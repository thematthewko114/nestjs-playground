import { Module } from '@nestjs/common';
import { AppController } from '../../controllers';
import { AppService } from '../../services';
import { CoinRankingController } from 'src/controllers/coin-ranking';
import { CoinRankingService } from 'src/services/coin-ranking';
import { UserModule } from '../users';

require('dotenv').config()

@Module({
  imports: [UserModule],
  controllers: [AppController, CoinRankingController],
  providers: [AppService, CoinRankingService],
})
export class AppModule {}
