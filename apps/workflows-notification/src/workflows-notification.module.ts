import { Module } from '@nestjs/common';
import { WorkflowsNotificationController } from './workflows-notification.controller';
import { WorkflowsNotificationService } from './workflows-notification.service';

@Module({
  imports: [],
  controllers: [WorkflowsNotificationController],
  providers: [WorkflowsNotificationService],
})
export class WorkflowsNotificationModule {}
