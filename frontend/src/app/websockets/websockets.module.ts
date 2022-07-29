import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createRxStompService, RxStompService } from './rx-stomp.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: RxStompService,
      useFactory: createRxStompService,
    },
  ],
})
export class WebsocketsModule {}
