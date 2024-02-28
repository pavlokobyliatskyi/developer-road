import { UsersModule } from '../users/users.module';
import { UsersController } from './controllers/users/users.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
})
export class GatewayModule {}
