import { Module } from '@nestjs/common';
import { databaseProviders } from '../../providers/database/mongodb.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}