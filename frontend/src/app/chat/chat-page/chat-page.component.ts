import { Component, OnDestroy, OnInit } from '@angular/core';
import { SendMessageEvent } from '../send-message-form/send-message-form.events';
import { Observable, Subscription } from 'rxjs';
import { MessageModel } from '../state/message.model';
import { MessagesQuery } from '../state/messages.query';
import { MessagesService } from '../state/messages.service';
import { ActivatedRoute } from '@angular/router';
import { RxStompService } from 'src/app/websockets/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { RxStompState } from '@stomp/rx-stomp';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages$!: Observable<MessageModel[]>;
  nickname!: string;
  subscriptions: Subscription[] = [];
  loading = true;

  constructor(
    private messagesQuery: MessagesQuery,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private rxStompService: RxStompService,
  ) {}

  ngOnInit() {
    this.messages$ = this.messagesQuery.selectAll();
    this.route.queryParams.subscribe((queryParam) => (this.nickname = queryParam['nickname']));
    this.rxStompService.activate();

    const connectedSub = this.rxStompService.connected$.subscribe((state) => {
      if (state === RxStompState.OPEN) {
        console.log('Successful connection to websockets');
        this.loading = false;
      }
    });

    const watchSub = this.rxStompService.watch('/topic/messages').subscribe((message: Message) => {
      const messageModel: MessageModel = JSON.parse(message.body);
      this.messagesService.addMessage(messageModel);
    });

    this.subscriptions.push(connectedSub, watchSub);
  }

  async ngOnDestroy() {
    await this.rxStompService.deactivate();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }

  onSendMessage({ text }: SendMessageEvent) {
    const userNickname = this.nickname;
    const body = { userNickname, text };
    this.rxStompService.publish({ destination: '/wsApp/message', body: JSON.stringify(body) });
  }
}
