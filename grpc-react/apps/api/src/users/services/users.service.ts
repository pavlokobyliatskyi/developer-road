import { Injectable } from '@nestjs/common';
import { IUser } from '@grpc-react/shared';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [];

  public createUser(args: Omit<IUser, 'id'>) {
    const newUser: IUser = {
      id: v4(),
      name: args.name,
      email: args.email,
    };

    this.users.push(newUser);

    return newUser;
  }

  public getUsers() {
    return this.users;
  }
}
