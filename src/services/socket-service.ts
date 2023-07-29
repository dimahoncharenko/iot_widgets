import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io("http://localhost:3000");
  }

  onNewData(): Observable<{
    temperature: number;
    power: number;
    consumption: number;
    charge: number;
    production: number;
  }> {
    return new Observable((observer) => {
      this.socket.on("get_params", (params) => {
        observer.next(params);
      })
    })
  }
}
