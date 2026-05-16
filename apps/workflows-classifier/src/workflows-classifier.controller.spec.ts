import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WorkflowsClassifierModule } from './workflows-classifier.module';


@Controller()
// Change "AppController" to "WorkflowsClassifierController" here:
export class WorkflowsClassifierController {
  
  @MessagePattern('workflows.classify')
  classifyWorkflow(@Payload() data: any): { classification: string } {
    const types = ['primary', 'secondary'];
    const result = types[Math.floor(Math.random() * types.length)];
    return { classification: result };
  }
}