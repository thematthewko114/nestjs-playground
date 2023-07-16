import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/users';
import { UserService } from 'src/services/users';
import { userProviders } from 'src/providers/users';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule {}