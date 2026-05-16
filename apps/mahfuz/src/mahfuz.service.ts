import { Injectable } from '@nestjs/common';

@Injectable()
export class MahfuzService {
  getHello(): string {
    return 'Hello World!';
  }
}
