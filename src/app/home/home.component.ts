import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { SocketService } from "../../services/socket-service";
import { trigger, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("fadeOut", [
      transition(":leave", [
        animate("0.1s", style({ opacity: 0 }))
      ])
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.6s"),
        animate("0.3s", style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  params: {
    temperature: number;
    power: number;
    charge: number;
    consumption: number;
    production: number;
  }
  currentPage = 1;
  pages = 2;
  private subscription: Subscription;

  constructor(private socketService: SocketService) {}

  nextPage() {
    this.currentPage = Math.min(this.currentPage + 1, this.pages);
  }

  prevPage() {
    this.currentPage = Math.max(this.currentPage - 1, 1);
  }

  ngOnInit(): void {
    this.subscription = this.socketService.onNewData().subscribe((data) => {
      this.params = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
