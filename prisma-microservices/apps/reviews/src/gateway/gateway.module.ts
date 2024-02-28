import { ReviewsModule } from '../reviews/reviews.module';
import { ReviewsController } from './controllers/reviews/reviews.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [ReviewsModule],
  controllers: [ReviewsController],
})
export class GatewayModule {}
