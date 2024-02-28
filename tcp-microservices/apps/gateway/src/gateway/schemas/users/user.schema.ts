import { IUser } from '@dr-tcp/shared';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema implements IUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
