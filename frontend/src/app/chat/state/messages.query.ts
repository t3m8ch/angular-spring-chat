import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MessagesState, MessagesStore } from './messages.store';

@Injectable()
export class MessagesQuery extends QueryEntity<MessagesState> {
  constructor(protected override store: MessagesStore) {
    super(store);
  }
}
