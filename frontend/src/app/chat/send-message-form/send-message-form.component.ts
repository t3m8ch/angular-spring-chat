import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendMessageEvent } from './send-message-form.events';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css'],
})
export class SendMessageFormComponent implements OnInit {
  @Output() sendMessage = new EventEmitter<SendMessageEvent>();

  sendMessageFormGroup = new FormGroup({
    messageText: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const text = this.sendMessageFormGroup.controls['messageText'].value;
    if (text) {
      this.sendMessage.emit({ text });
    }
    this.sendMessageFormGroup.reset();
  }
}
