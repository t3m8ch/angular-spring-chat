import { Component, Input, OnInit } from '@angular/core';
import { MessageModel } from '../state/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() messages!: MessageModel[] | null;

  constructor() { }

  ngOnInit(): void {
  }

  trackMessages(index: number, message: MessageModel) {
    return message.id;
  }
}
