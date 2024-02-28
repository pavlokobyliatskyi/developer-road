import { IUser } from '@dr-tcp/shared';
import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from 'apps/users/src/users/user.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'users.create-user' })
  async createUser(data: Omit<IUser, 'id'>): Promise<IUser> {
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'users.get-user' })
  async getUser({ id }: Pick<IUser, 'id'>): Promise<IUser | null> {
    const user = this.usersService.getUser(id);

    if (!user) {
      return null;
    }

    return user;
  }
}
