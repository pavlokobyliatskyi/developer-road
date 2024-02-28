import { UsersService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
