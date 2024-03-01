import { IUser } from '@grpc-react/shared';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from 'apps/api/src/users/services/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService', 'CreateUser')
  createUser(args: Omit<IUser, 'id'>): IUser {
    return this.usersService.createUser(args);
  }

  @GrpcMethod('UsersService', 'GetUsers')
  getUsers(): { users: IUser[] } {
    const users = this.usersService.getUsers();

    return { users };
  }
}
