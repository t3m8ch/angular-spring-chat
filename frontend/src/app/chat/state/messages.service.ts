import { Injectable } from '@angular/core';
import { MessagesStore } from './messages.store';
import { createMessage, CreateMessageDTO } from './message.model';
import { RxStompState } from '@stomp/rx-stomp';
import { RxStompService } from '../../websockets/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Injectable()
export class MessagesService {
  constructor(private messagesStore: MessagesStore, private rxStompService: RxStompService) {}

  private subscriptions: Subscription[] = [];

  connect() {
    this.messagesStore.setLoading(true);

    const connectSub = this.rxStompService.connect().subscribe((state) => {
      if (state === RxStompState.OPEN) {
        this.messagesStore.setLoading(false);

        const watchSub = this.rxStompService.watch('/topic/messages').subscribe((message: Message) => {
          const messageModel: CreateMessageDTO = JSON.parse(message.body);
          this.messagesStore.add(createMessage(messageModel));
        });

        this.subscriptions.push(connectSub, watchSub);
      }
    });
  }

  async disconnect() {
    await this.rxStompService.deactivate();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  addMessage({ userNickname, text }: CreateMessageDTO) {
    const body = { userNickname, text };
    this.rxStompService.publish({ destination: '/wsApp/message', body: JSON.stringify(body) });
  }
}
