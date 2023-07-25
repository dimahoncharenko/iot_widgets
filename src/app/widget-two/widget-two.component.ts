import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent {
  angle = 0;
  temperature = 50;
  prevX = 0;
  prevY = 0;
  isDragging = false;
  initialAngle = 0;

  current_glow_color = "#7800b8";
  glow_colors = [
    "#7800b8",
    "#7cd42d",
    "#ddc61b",
    "#4050e9",
    "#fc0c43",
    "#0cfcd8",
  ];

  constructor(private _elementRef: ElementRef) {}

  handleChangeGlowColor(c: string) {
    this.current_glow_color = c;
  }

  handleMouseDown(e: MouseEvent) {
      this.isDragging = true;
      this.updateAngle(e);
  }

  handleMousemove(e: MouseEvent) {
    if (this.isDragging) {
      this.updateAngle(e);
    }
  }

  @HostListener("document:mouseup")
  handleMouseUp() {
    this.isDragging = false;
  }

  updateAngle(e: MouseEvent) {
    const slider = this._elementRef.nativeElement.querySelector(".knob");
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rad = Math.atan2(y, x);
    let deg = (rad * 180) / Math.PI;

    // Adjusting the degree to be between 0 and 360
    deg = (deg + 360) % 360;

    const delta = deg - this.angle;
    if (delta > 180) {
      deg = this.angle - (360 - delta);
      this.temperature -= 1;
    } else if (delta < -180) {
      deg = this.angle + (360 + delta);
      this.temperature += 1;
    } else if (delta > 0 && this.temperature < 100) {
      this.temperature += 1;
    } else if (delta < 0 && this.temperature > 0) {
      this.temperature -= 1;
    }

    // Limit temperature between 0 and 100
    this.temperature = Math.max(0, Math.min(100, this.temperature));

    this.angle = deg;
    this.prevX = x;
    this.prevY = y;
  }
}
