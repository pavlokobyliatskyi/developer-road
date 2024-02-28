import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Review } from 'node_modules/.prisma/client/reviews';
import { ReviewsService } from 'apps/reviews/src/reviews/reviews.service';

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @MessagePattern({ cmd: 'reviews.create-review' })
  async createUser(data: Omit<Review, 'id'>): Promise<Review> {
    return this.reviewsService.createReview(data);
  }

  @MessagePattern({ cmd: 'reviews.get-reviews' })
  async getReviews({
    userId,
  }: Pick<Review, 'userId'>): Promise<Review[] | null> {
    return await this.reviewsService.getReviews(userId);
  }

  @MessagePattern({ cmd: 'reviews.get-best-week-reviews' })
  async getBestWeekReviews({
    userId,
  }: Pick<Review, 'userId'>): Promise<Review[] | null> {
    return await this.reviewsService.getBestWeekReviews(userId);
  }
}
