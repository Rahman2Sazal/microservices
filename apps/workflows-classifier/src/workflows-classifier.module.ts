import { Module } from '@nestjs/common';
import { WorkflowsClassifierService } from './workflows-classifier.service';

@Module({
  imports: [],
  controllers: [],
  providers: [WorkflowsClassifierService],
})
export class WorkflowsClassifierModule {}
