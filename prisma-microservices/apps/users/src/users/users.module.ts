import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
