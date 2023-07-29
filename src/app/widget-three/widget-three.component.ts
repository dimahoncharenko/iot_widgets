import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.css']
})
export class WidgetThreeComponent {
  grid = true;
  @Input() voltageValue = 0.00;
  @Input() productionValue = 0.00;
  @Input() consumptionValue = 0.00;
  @Input() chargeValue = 0.00;
  maxCharge = 170;

  switchGrid() {
    this.grid = !this.grid;
  }
}
