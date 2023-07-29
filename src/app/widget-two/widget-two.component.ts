import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

import { Subject } from "rxjs";
import { debounceTime, switchMap, takeUntil } from "rxjs/operators";

import { MockAPIService } from "../../services/mock-api.service";

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent implements OnInit, OnDestroy {
  angle = 0;
  temperature = 18;
  @Input() powerValue = 0.00;
  @Input() currentTemperature = this.temperature;
  prevY = 0;
  prevX = 0;
  isDragging = false;
  initialAngle = 0;


  private clickSubject = new Subject<void>();
  private unsubscribe = new Subject<void>();

  current_glow_color = "#7800b8";
  glow_colors = [
    "#7800b8",
    "#7cd42d",
    "#ddc61b",
    "#4050e9",
    "#fc0c43",
    "#0cfcd8",
  ];

  constructor(private mock: MockAPIService, private _elementRef: ElementRef) {
    this.setupClickHandler();
  }

  ngOnInit() {
    this.changeTemperature();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private setupClickHandler() {
    this.clickSubject.pipe(
      debounceTime(2000),
      switchMap(() => this.mock.changeTemperature(this.temperature).pipe(takeUntil(this.unsubscribe)))
    ).subscribe();
  }

  changeTemperature() {
    this.clickSubject.next();
  }

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

    this.changeTemperature();
  }
}
