import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(args: Omit<User, 'id'>): Promise<User> {
    return await this.userRepository.create(args);
  }

  public async getUser(id: number): Promise<User> {
    return await this.userRepository.findUnique({ id });
  }
}
