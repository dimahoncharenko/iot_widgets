import { Component, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import {
  Chart,
  registerables,
} from 'chart.js';

import { PaletteModeService } from "../../services/palette-mode.service";

@Component({
  selector: 'app-widget-four',
  templateUrl: './widget-four.component.html',
  styleUrls: ['./widget-four.component.css'],
})
export class WidgetFourComponent implements AfterViewInit {
  @ViewChild("chart", { static: false }) chart: ElementRef<HTMLCanvasElement>;

  lineChart: any = null;
  updateInterval: number;
  maxDataPoints = 8;
  index = 0;

  @Input() newDataPoint = 0;

  constructor(private palette: PaletteModeService) {}

  ngAfterViewInit() {
    Chart.register(...registerables);
    this.initializeChart();
    this.startRealTimeUpdate();
  }

  ngOnDestroy() {
    clearInterval(this.updateInterval);
  }

  initializeChart() {
    if (this.chart && this.chart.nativeElement) {
      this.lineChart = new Chart(this.chart.nativeElement, {
        type: "line",
        data: {
          datasets: [
            {
              data: [],
              label: 'Temperature',
              fill: true,
              backgroundColor: this.palette.chartColors[this.palette.currentMode - 1],
              tension: 0.3,
              borderCapStyle: 'round',
              borderJoinStyle: 'round',
              borderColor: "hsla(0deg, 0%, 10%, .2)"
            },
          ],
          labels: []
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
              intersect: false,
            }
          },
          elements: {
            point: {
              radius: 1,
              borderColor: 'hsl(30deg, 50%, 70%)',
              borderWidth: 2,
              pointStyle: 'crossRot',
            },
          },
        },
      });
    }
  }

  startRealTimeUpdate() {
    this.updateInterval = window.setInterval(() => {
      if (!this.lineChart.data.labels) return;

      const newLabel = new Date().toLocaleTimeString();

      this.lineChart.data.datasets[0].data.push(this.newDataPoint);
      this.lineChart.data.labels.push(newLabel);

      // Limit the number of data points displayed
      if (this.lineChart.data.datasets[0].data.length > this.maxDataPoints) {
        this.lineChart.data.datasets[0].data.shift();
        this.lineChart.data.labels.shift();
      }

      this.lineChart.update();
    }, 2000);
  }
}
