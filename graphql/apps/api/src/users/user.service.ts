import { IUser } from '@dr-graphql/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
    console.log(this.users);

    return this.users.find((user) => user.id === id);
  }

  private getNextId() {
    return this.users.length + 1;
  }
}
