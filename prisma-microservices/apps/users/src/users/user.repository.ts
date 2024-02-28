import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from 'node_modules/.prisma/client/users';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
      },
    });
  }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
}
