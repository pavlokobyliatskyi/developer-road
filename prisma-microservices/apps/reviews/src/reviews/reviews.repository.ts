import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Review, Prisma } from 'node_modules/.prisma/client/reviews';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: Prisma.ReviewCreateInput): Promise<Review> {
    return this.prisma.review.create({
      data: {
        userId: args.userId,
        text: args.text,
      },
    });
  }

  async findMany(args: Prisma.ReviewWhereInput): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: args,
    });
  }
}
