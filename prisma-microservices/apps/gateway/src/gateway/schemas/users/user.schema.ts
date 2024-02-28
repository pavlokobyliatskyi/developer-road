import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ReviewSchema } from '../reviews/review.schema';
import { IUserShema } from '../../interfaces/users/user-schema.interface';

@ObjectType()
export class UserSchema implements IUserShema {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [ReviewSchema], { defaultValue: [] })
  bestWeekReviews?: ReviewSchema[];
}
