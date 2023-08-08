import { Component } from '@angular/core';

import { PaletteModeService, Modes } from "../../services/palette-mode.service";

@Component({
  selector: 'app-palette-mode',
  templateUrl: './palette-mode.component.html',
  styleUrls: ['./palette-mode.component.css']
})
export class PaletteModeComponent {
  constructor(private palette: PaletteModeService) {}

  get modes() {
    return this.palette.modes;
  }

  get current() {
    return this.palette.currentMode;
  }

  handleClick(mode: Modes) {
    this.palette.changeMode(mode);
  }
}
