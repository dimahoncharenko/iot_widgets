import { Component } from '@angular/core';

import { PaletteModeService } from "../services/palette-mode.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'IoT Widgets';

  constructor(private palette: PaletteModeService) { }

  get paletteMode() {
    return this.palette.currentMode;
  }
}
