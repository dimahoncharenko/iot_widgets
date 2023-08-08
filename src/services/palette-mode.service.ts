import { Injectable } from '@angular/core';

export type Modes = 1 | 2 | 3 | 4 | 5 | 6;

function isMode(param: number): param is Modes {
  const modes: Modes[] = [1,2,3,4,5,6];

  for (let m of modes) {
    if (m === Number(param)) return true;
  }

  return false;
}

@Injectable({
  providedIn: 'root'
})
export class PaletteModeService {
  currentMode: Modes = 1;
  readonly modes: Modes[] = [1,2,3,4,5,6];
  readonly chartColors = [
    "hsla(279.13deg, 100%, 36.08%, .2)",
    "hsla(91.62deg, 66.01%, 50.39%, .2)",
    "hsla(52.89deg, 78.23%, 48.63%, .2)",
    "hsla(234.32deg, 79.34%, 58.24%, .2)",
    "hsla(171deg, 97.56%, 51.76%, .2)",
    "hsla(346.25deg, 97.56%, 51.76%, .2)"
  ];

  constructor() {
    const candidate = Number(localStorage.getItem("palette-mode"));
    if (isMode(candidate)) {
      this.currentMode = candidate;
    };
  }

  changeMode(mode: Modes) {
    this.currentMode = mode;
    localStorage.setItem("palette-mode", `${this.currentMode}`);
  }
}

