import { Controller, Get } from '@nestjs/common';
import { MahfuzService } from './mahfuz.service';

@Controller()
export class MahfuzController {
  constructor(private readonly mahfuzService: MahfuzService) {}

  @Get()
  getHello(): string {
    return this.mahfuzService.getHello();
  }
}
