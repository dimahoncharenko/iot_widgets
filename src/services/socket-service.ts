import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io("https://iot-mock-api.onrender.com");
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
