import { Review } from 'node_modules/.prisma/client/reviews';
import { User } from 'node_modules/.prisma/client/users';

export interface IUserShema extends User {
  bestWeekReviews?: Review[];
}
