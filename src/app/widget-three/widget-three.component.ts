import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.css']
})
export class WidgetThreeComponent {
  grid = true;
  voltageValue = "33.00W";

  switchGrid() {
    this.grid = !this.grid;
    this.voltageValue = this.grid ? "33.00W" : "null";
  }
}
