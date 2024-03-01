import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
})
export class GatewayModule {}
