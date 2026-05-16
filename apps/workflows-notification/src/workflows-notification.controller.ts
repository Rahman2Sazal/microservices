import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class WorkflowsNotificationController {

  @EventPattern('workflows.notification.send')
  handleNotification(@Payload() data: any) {
    // This just intercepts the event and processes it (e.g., logging it)
    console.log('Notification Service captured an event! Data:', data);
  }
}