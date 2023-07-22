import { Component, OnInit } from '@angular/core';
import { Chart, registerables  } from "chart.js";

@Component({
  selector: 'app-widget-four',
  templateUrl: './widget-four.component.html',
  styleUrls: ['./widget-four.component.css']
})
export class WidgetFourComponent implements OnInit{
  chart: HTMLCanvasElement | null = null;

  ngOnInit() {
    const chartEl = document.querySelector<HTMLCanvasElement>("#chart");
    if (chartEl) this.chart = chartEl;
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart() {
    if (this.chart) {
      new Chart(this.chart, {
        type: "line",
        data: {
          datasets: [{
            data: [0, 5, 20, 42, 10, 30, 55, 100, 90, 34, 56, 22, 15, 70, 50, 70, 45, 22, 56, 13, 5, 6, 33, 50],
            label: "Temperature",
            fill: true,
            backgroundColor: "hsla(180deg, 50%, 50%, .2)",
            tension: .3,
            borderJoinStyle: "round",
            borderCapStyle: "round",
          }],
          labels: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
          ]
        },

        options: {
          borderColor: "#007bff",
          backgroundColor: "#007bff",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
              intersect: false
            },
          },
          elements: {
            point: {
              radius: 1,
              borderColor: "hsl(30deg, 50%, 70%)",
              borderWidth: 2,
              pointStyle: "crossRot"
            },
          },
        }
      });
    }
  }
}
