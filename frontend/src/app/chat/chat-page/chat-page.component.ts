import { Component, OnDestroy, OnInit } from '@angular/core';
import { SendMessageEvent } from '../send-message-form/send-message-form.events';
import { Observable } from 'rxjs';
import { MessageModel } from '../state/message.model';
import { MessagesQuery } from '../state/messages.query';
import { MessagesService } from '../state/messages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages$!: Observable<MessageModel[]>;
  loading$!: Observable<boolean>;
  nickname!: string;

  constructor(
    private messagesQuery: MessagesQuery,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.messages$ = this.messagesQuery.selectAll();
    this.loading$ = this.messagesQuery.selectLoading();
    this.route.queryParams.subscribe((queryParam) => (this.nickname = queryParam['nickname']));

    this.messagesService.connect();
  }

  async ngOnDestroy() {
    await this.messagesService.disconnect();
  }

  onSendMessage({ text }: SendMessageEvent) {
    const userNickname = this.nickname;
    this.messagesService.addMessage({ userNickname, text });
  }
}
