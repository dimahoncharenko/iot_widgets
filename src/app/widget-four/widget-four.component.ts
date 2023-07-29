import { Component, OnInit, Input } from '@angular/core';
import {
  ChartTypeRegistry,
  Chart,
  registerables,
} from 'chart.js';

@Component({
  selector: 'app-widget-four',
  templateUrl: './widget-four.component.html',
  styleUrls: ['./widget-four.component.css'],
})
export class WidgetFourComponent implements OnInit {
  chart: HTMLCanvasElement | null = null;
  lineChart: Chart;
  updateInterval: number;
  maxDataPoints = 8;
  index = 0;

  @Input() newDataPoint = 0;

  ngOnInit() {
    const chartEl = document.querySelector<HTMLCanvasElement>('#chart');
    if (chartEl) this.chart = chartEl;
    Chart.register(...registerables);
    this.initializeChart();
    this.startRealTimeUpdate();
  }

  ngOnDestroy() {
    clearInterval(this.updateInterval);
  }

  initializeChart() {
    if (!this.chart) return;
    this.lineChart = new Chart(this.chart, {
      type: "line",
      data: {
        datasets: [
          {
            data: [],
            label: 'Temperature',
            fill: true,
            backgroundColor: 'hsla(180deg, 50%, 50%, .2)',
            tension: 0.3,
            borderCapStyle: 'round',
            borderJoinStyle: 'round'
          },
        ],
        labels: []
      },
      options: {
        responsive: true,
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
            intersect: false,
          },
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
