import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  @MessagePattern('workflows.classify')
  classifyWorkflow(@Payload() data: any): { classification: string } {
    // For the assignment, we can randomly or conditionally return primary/secondary
    const types = ['primary', 'secondary'];
    const result = types[Math.floor(Math.random() * types.length)];
    
    return { classification: result };
  }
}