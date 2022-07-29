import { MessageModel } from './message.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface MessagesState extends EntityState<MessageModel, string> {}

@Injectable()
@StoreConfig({ name: 'messages' })
export class MessagesStore extends EntityStore<MessagesState> {
  constructor() {
    super();
  }
}
