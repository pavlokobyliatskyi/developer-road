import { PrismaModule } from '../prisma/prisma.module';
import { ReviewsRepository } from './reviews.repository';
import { ReviewsService } from './reviews.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ReviewsService, ReviewsRepository],
  exports: [ReviewsService],
})
export class ReviewsModule {}
