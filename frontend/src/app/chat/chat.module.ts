import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { TuiButtonModule, TuiGroupModule, TuiLoaderModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { SendMessageFormComponent } from './send-message-form/send-message-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesQuery } from './state/messages.query';
import { MessagesService } from './state/messages.service';
import { MessagesStore } from './state/messages.store';
import { NicknameInQueryParamsGuard } from './guards/nickname-in-query-params.guard';
import { WebsocketsModule } from '../websockets/websockets.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChatPageComponent, MessageItemComponent, MessagesListComponent, SendMessageFormComponent],
  imports: [
    CommonModule,
    TuiScrollbarModule,
    TuiIslandModule,
    TuiGroupModule,
    TuiInputModule,
    TuiButtonModule,
    ReactiveFormsModule,
    WebsocketsModule,
    RouterModule,
    TuiLoaderModule,
  ],
  providers: [MessagesQuery, MessagesService, MessagesStore, NicknameInQueryParamsGuard],
})
export class ChatModule {}
