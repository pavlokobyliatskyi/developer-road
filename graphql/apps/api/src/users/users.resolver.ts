import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Resolver(UsersResolver)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserSchema, { nullable: true })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserSchema)
  async createUser(
    @Args('name', { type: () => String }) name: string,
    @Args('email', { type: () => String }) email: string
  ) {
    return this.userService.createUser({ name, email });
  }
}
