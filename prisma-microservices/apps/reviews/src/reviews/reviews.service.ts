import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository';
import { Review } from 'node_modules/.prisma/client/reviews';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  public async createReview(args: Omit<Review, 'id'>): Promise<Review> {
    return await this.reviewsRepository.create(args);
  }

  public async getReviews(userId: number): Promise<Review[]> {
    return await this.getUserReviews(userId);
  }

  public async getBestWeekReviews(userId: number) {
    const reviews = await this.getUserReviews(userId);
    return this.getRandomItems<Review>(reviews);
  }

  private async getUserReviews(userId: number): Promise<Review[]> {
    const reviews = await this.reviewsRepository.findMany({
      userId,
    });

    return reviews.filter((review) => review.userId === userId);
  }

  private getRandomItems<T>(array: T[]) {
    const maxItems = 3;

    // Ensure the array is not empty
    if (array.length === 0) {
      return [];
    }

    // Shuffle the array to randomize the order
    const shuffledArray = array.sort(() => Math.random() - 0.5);

    // Take the first up to maxItems items from the shuffled array
    const randomSubset = shuffledArray.slice(
      0,
      Math.min(array.length, maxItems)
    );

    return randomSubset;
  }
}
