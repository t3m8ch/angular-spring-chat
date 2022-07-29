import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import SockJS from 'sockjs-client';

@Injectable()
export class RxStompService extends RxStomp {}

export function createRxStompService(): RxStompService {
  const service = new RxStompService();
  service.configure({
    webSocketFactory() {
      return new SockJS('http://localhost:8080/wsConnect');
    },
  });
  return service;
}
