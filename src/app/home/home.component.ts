import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { SocketService } from "../../services/socket-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  params: {
    temperature: number;
    power: number;
    charge: number;
    consumption: number;
    production: number;
  }
  private subscription: Subscription;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.subscription = this.socketService.onNewData().subscribe((data) => {
      this.params = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
