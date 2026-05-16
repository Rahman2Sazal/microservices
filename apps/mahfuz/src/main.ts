import { NestFactory } from '@nestjs/core';
import { MahfuzModule } from './mahfuz.module';

async function bootstrap() {
  const app = await NestFactory.create(MahfuzModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
