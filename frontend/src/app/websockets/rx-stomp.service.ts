import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import SockJS from 'sockjs-client';
import { Observable, tap } from 'rxjs';
import { RxStompState } from '@stomp/rx-stomp/esm6/rx-stomp-state';

@Injectable()
export class RxStompService extends RxStomp {
  connect(): Observable<RxStompState> {
    this.activate();
    return this.connected$.pipe(
      tap((state) => {
        if (state === RxStompState.OPEN) {
          console.log('Successful connection to websockets');
        }
      }),
    );
  }
}

export function createRxStompService(): RxStompService {
  const service = new RxStompService();
  service.configure({
    webSocketFactory() {
      return new SockJS('http://localhost:8080/wsConnect');
    },
  });
  return service;
}
