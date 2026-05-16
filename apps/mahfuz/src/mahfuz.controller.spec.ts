import { Test, TestingModule } from '@nestjs/testing';
import { MahfuzController } from './mahfuz.controller';
import { MahfuzService } from './mahfuz.service';

describe('MahfuzController', () => {
  let mahfuzController: MahfuzController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MahfuzController],
      providers: [MahfuzService],
    }).compile();

    mahfuzController = app.get<MahfuzController>(MahfuzController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mahfuzController.getHello()).toBe('Hello World!');
    });
  });
});
