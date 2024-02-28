import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { ReviewSchema } from '../../schemas/reviews/review.schema';
import { Review } from 'node_modules/.prisma/client/reviews';
import { catchError, map, of } from 'rxjs';

@Resolver()
export class ReviewsResolver implements OnApplicationBootstrap {
  constructor(
    @Inject('REVIEWS_SERVICE')
    private readonly reviewsService: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    try {
      await this.reviewsService.connect();
    } catch (e) {}
  }

  @Mutation(() => ReviewSchema, { nullable: true })
  async createReview(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('text', { type: () => String }) text: string
  ) {
    return this.reviewsService
      .send<Review, Omit<Review, 'id'>>(
        { cmd: 'reviews.create-review' },
        {
          userId,
          text,
        }
      )
      .pipe(
        catchError(() => {
          return of(null);
        }),
        map((data) => {
          return data;
        })
      );
  }

  @Query(() => [ReviewSchema], { defaultValue: [] })
  async getReviews(@Args('userId', { type: () => Int }) userId: number) {
    return this.reviewsService
      .send<Review, Pick<Review, 'userId'>>(
        { cmd: 'reviews.get-reviews' },
        {
          userId,
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
