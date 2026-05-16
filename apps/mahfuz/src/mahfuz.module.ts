import { Module } from '@nestjs/common';
import { MahfuzController } from './mahfuz.controller';
import { MahfuzService } from './mahfuz.service';

@Module({
  imports: [],
  controllers: [MahfuzController],
  providers: [MahfuzService],
})
export class MahfuzModule {}
