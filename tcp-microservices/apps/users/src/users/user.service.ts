import { IUser } from '@dr-tcp/shared';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [];

  public createUser(args: Omit<IUser, 'id'>): IUser {
    const id = this.getNextId();

    const newUser = {
      id,
      name: args.name,
      email: args.email,
    };

    this.users.push(newUser);

    return newUser;
  }

  public getUser(id: number): IUser {
    return this.users.find((user) => user.id === id);
  }

  private getNextId() {
    return this.users.length + 1;
  }
}
