import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSchema } from '../../schemas/users/user.schema';
import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IUser } from '@dr-tcp/shared';

@Resolver()
export class UsersResolver implements OnApplicationBootstrap {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.usersService.connect();
  }

  @Mutation(() => UserSchema)
  async createUser(
    @Args('name', { type: () => String }) name: string,
    @Args('email', { type: () => String }) email: string
  ) {
    return this.usersService.send<IUser, Omit<IUser, 'id'>>(
      { cmd: 'users.create-user' },
      {
        name,
        email,
      }
    );
  }

  @Query(() => UserSchema, { nullable: true })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.send<IUser, Pick<IUser, 'id'>>(
      { cmd: 'users.get-user' },
      {
        id,
      }
    );
  }
}
