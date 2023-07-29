import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent {
  clicked = false;

  current_color = "linear-gradient(180deg, hsl(294, 100%, 79%) 0%, rgb(70, 9, 156) 100%)";
  colors = [
    "linear-gradient(180deg, hsl(294, 100%, 79%) 0%, rgb(70, 9, 156) 100%)",
    "linear-gradient(180deg, rgba(124,212,45,1) 0%, rgba(9,156,92,1) 100%)",
    "linear-gradient(180deg, rgba(255,227,19,1) 0%, rgba(203,90,6,1) 100%)",
    "linear-gradient(180deg, rgba(78,129,255,1) 0%, rgba(23,0,89,1) 100%)",
    "linear-gradient(180deg, rgba(252,12,67,1) 0%, rgba(47,0,130,1) 100%)",
    "linear-gradient(180deg, rgba(12,252,216,1) 0%, rgba(144,0,255,1) 100%)",
  ];

  handleChangeColor(c: string) {
    this.current_color = c;
  }

  handleClick() {
    this.clicked = !this.clicked;
  }
}
