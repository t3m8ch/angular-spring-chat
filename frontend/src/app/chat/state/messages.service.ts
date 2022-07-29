import { Injectable } from '@angular/core';
import { MessagesStore } from './messages.store';
import { createMessage, CreateMessageDTO } from './message.model';

@Injectable()
export class MessagesService {
  constructor(private messagesStore: MessagesStore) {
  }

  addMessage(dto: CreateMessageDTO) {
    this.messagesStore.add(createMessage(dto));
  }
}
