import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserSchema } from '../../schemas/users/user.schema';
import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from 'node_modules/.prisma/client/users';
import { Review } from 'node_modules/.prisma/client/reviews';
import { catchError, of, map } from 'rxjs';
import { ReviewSchema } from '../../schemas/reviews/review.schema';

@Resolver(() => UserSchema)
export class UsersResolver implements OnApplicationBootstrap {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: ClientProxy,
    @Inject('REVIEWS_SERVICE')
    private readonly reviewsService: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.usersService.connect();
  }

  @Mutation(() => UserSchema)
  async createUser(
    @Args('name', { type: () => String }) name: string,
    @Args('email', { type: () => String }) email: string
  ) {
    return this.usersService.send<User, Omit<User, 'id'>>(
      { cmd: 'users.create-user' },
      {
        name,
        email,
      }
    );
  }

  @Query(() => UserSchema, { nullable: true })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.send<User, Pick<User, 'id'>>(
      { cmd: 'users.get-user' },
      {
        id,
      }
    );
  }

  @ResolveField(() => [ReviewSchema], { defaultValue: [] })
  async bestWeekReviews(@Parent() user: UserSchema) {
    return this.reviewsService
      .send<Review, Pick<Review, 'userId'>>(
        { cmd: 'reviews.get-best-week-reviews' },
        {
          userId: user.id,
        }
      )
      .pipe(
        catchError(() => {
          return of([]);
        }),
        map((data) => {
          return data;
        })
      );
  }
}
