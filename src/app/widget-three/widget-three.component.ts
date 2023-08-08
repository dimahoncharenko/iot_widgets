import { Component, Input } from '@angular/core';

import { MockAPIService } from "../../services/mock-api.service";

@Component({
  selector: 'app-widget-three',
  templateUrl: './widget-three.component.html',
  styleUrls: ['./widget-three.component.css']
})
export class WidgetThreeComponent {
  @Input() voltageValue = 0.00;
  @Input() productionValue = 0.00;
  @Input() consumptionValue = 0.00;
  @Input() chargeValue = 0.00;
  maxCharge = 170;

  constructor(private mock: MockAPIService) { }

  get grid() {
    return this.mock.isGridOn;
  }

  switchGrid() {
    this.mock.switchGrid();
  }
}
