import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UsersResolver, UserService],
  exports: [UsersResolver, UserService],
})
export class UsersModule {}
