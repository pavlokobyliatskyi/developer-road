import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IReviewSchema } from '../../interfaces/reviews/review-schema.interface';

@ObjectType()
export class ReviewSchema implements IReviewSchema {
  @Field(() => Int)
  id: number;

  @Field()
  userId: number;

  @Field()
  text: string;
}
