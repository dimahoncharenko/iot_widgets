import { Component } from '@angular/core';

import { PaletteModeService } from "../../services/palette-mode.service";
import { MockAPIService } from "../../services/mock-api.service";

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent {
  constructor(private palette: PaletteModeService, private mock: MockAPIService) { }

  get gradientMode() {
    return this.palette.currentMode;
  }

  get clicked() {
    return this.mock.isGridOn;
  }

  handleClick() {
    this.mock.switchGrid();
  }
}
