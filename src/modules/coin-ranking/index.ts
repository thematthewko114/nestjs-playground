import { Module } from '@nestjs/common';
import { AppController } from '../../controllers';
import { AppService } from '../../services';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinRankingController } from 'src/controllers/coin-ranking';
import { CoinRankingService } from 'src/services/coin-ranking';
import { UserController } from 'src/controllers/users';
import { UserService } from 'src/services/users';
import { UserModule } from '../users';
import { userProviders } from 'src/providers/users';
import { DatabaseModule } from '../database';

require('dotenv').config()

const mongodbUri = process.env.MONGODB_CONNECTION_STRING

@Module({
  imports: [UserModule],
  controllers: [AppController, CoinRankingController],
  providers: [AppService, CoinRankingService],
})
export class AppModule {}
