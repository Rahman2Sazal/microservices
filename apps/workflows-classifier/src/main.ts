import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { WorkflowsClassifierModule } from './../src/workflows-classifier.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkflowsClassifierModule);

  // Connect NATS microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'], // change to match your teacher's NATS port if different
    },
  });

  await app.startAllMicroservices();
  await app.listen(3002); // Use 3002 so it doesn't conflict with other apps running on 3000, 3001, or 3003
}
bootstrap();