import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.css']
})
export class WidgetThreeComponent {
  grid = true;

  switchGrid() {
    this.grid = !this.grid;
  }
}
