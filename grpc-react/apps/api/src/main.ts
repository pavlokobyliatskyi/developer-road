import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  Transport,
  ClientOptions,
} from '@nestjs/microservices';
import { join } from 'path';
import { GatewayModule } from './gateway/gateway.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GatewayModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'users',
        protoPath: join(
          __dirname,
          '../../libs/shared/src/lib/proto/users.proto'
        ),
      },
    }
  );

  await app.listen();
}

bootstrap();
