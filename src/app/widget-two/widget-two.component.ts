import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

import { MockAPIService } from '../../services/mock-api.service';
import { PaletteModeService } from '../../services/palette-mode.service';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css'],
})
export class WidgetTwoComponent implements OnInit, OnDestroy, AfterViewInit {
  angle = 0;
  temperature = 18;
  @Input() powerValue = 0.0;
  @Input() currentTemperature = this.temperature;
  prevY = 0;
  prevX = 0;
  isDragging = false;
  initialAngle = 0;
  @ViewChild('progress', { static: false }) progressBar: ElementRef<SVGElement>;

  private clickSubject = new Subject<void>();
  private unsubscribe = new Subject<void>();
  private mediaQuery = window.matchMedia('screen and (min-width: 1000px)');

  constructor(
    private mock: MockAPIService,
    private _elementRef: ElementRef,
    private palette: PaletteModeService
  ) {
    this.setupClickHandler();
  }

  ngAfterViewInit() {
    if (this.progressBar) {
      this.handleMediaQuery();
      this.mediaQuery.addEventListener("change", () => this.handleMediaQuery());
    }
  }

  handleMediaQuery() {
    if (this.progressBar) {
      if (this.mediaQuery.matches) {
        this.progressBar.nativeElement.style.setProperty('--dash-width', '660');
      } else {
        this.progressBar.nativeElement.style.setProperty('--dash-width', '527');
      }
    }
  }

  ngOnInit() {
    this.changeTemperature();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();

    this.mediaQuery.removeEventListener("change", this.handleMediaQuery);  
  }

  private setupClickHandler() {
    this.clickSubject
      .pipe(
        debounceTime(2000),
        switchMap(() =>
          this.mock
            .changeTemperature(this.temperature)
            .pipe(takeUntil(this.unsubscribe))
        )
      )
      .subscribe();
  }

  get current_gradient() {
    return this.palette.currentMode;
  }

  changeTemperature() {
    this.clickSubject.next();
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

  @HostListener('document:mouseup')
  handleMouseUp() {
    this.isDragging = false;
  }

  updateAngle(e: MouseEvent) {
    const slider = this._elementRef.nativeElement.querySelector('.knob');
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
