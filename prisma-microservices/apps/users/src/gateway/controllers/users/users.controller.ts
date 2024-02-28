import { User } from 'node_modules/.prisma/client/users';
import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from 'apps/users/src/users/user.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'users.create-user' })
  async createUser(data: Omit<User, 'id'>): Promise<User> {
    return await this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'users.get-user' })
  async getUser({ id }: Pick<User, 'id'>): Promise<User | null> {
    const user = await this.usersService.getUser(id);

    if (!user) {
      return null;
    }

    return user;
  }
}
