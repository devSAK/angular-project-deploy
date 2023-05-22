import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-three',
  templateUrl: './dashboardothers-component-three.component.html',
  styleUrls: ['./dashboardothers-component-three.component.scss']
})
export class DashboardothersComponentThreeComponent implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef | undefined;
  lineChart: Chart<"line", number[], string> | undefined;

  datalabels: any = [];
  id: any = [];
  userId: any = [];
  dataSource: any;
  responseCheck: boolean = false;
  progressSpinner: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(resultComp => {
      if (resultComp != '' && resultComp != null && resultComp != undefined) {
        if (this.lineChart != null || this.lineChart != undefined) {
          this.lineChart.destroy();
        }
        if (this.id != null && this.id.length > 0) {
          this.id.length = 0;
        }
        if (this.userId != null && this.userId.length > 0) {
          this.userId.length = 0;
        }
        this.dataSource = resultComp;

        for (let i of this.dataSource) {
          this.id.push(i['id']);
          this.userId.push(i['userId']);
        }
        this.responseCheck = true;
        this.progressSpinner = false;

        setTimeout(() => {
          this.lineChartMethod();
        });
      } else {
        this.responseCheck = false;
        this.progressSpinner = false;
      }
    });
  }

  lineChartMethod() {
    Chart.defaults.font.size = 8;
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.userId,
        datasets: [
          {
            label: 'ID',
            borderWidth: 1.5,
            fill: false,
            backgroundColor: '#ff99ff',
            borderColor: '#ff99ff',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointHoverBackgroundColor: '#ff99ff',
            pointHoverBorderColor: '#ff99ff',
            pointRadius: 0,
            pointHitRadius: 4,
            data: this.id,
            spanGaps: false,
          },
          {
            label: 'USER ID',
            borderWidth: 1.5,
            fill: false,
            backgroundColor: '#4B088A',
            borderColor: '#4B088A',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointHoverBackgroundColor: '#4B088A',
            pointHoverBorderColor: '#4B088A',
            pointRadius: 0,
            pointHitRadius: 4,
            data: this.userId,
            spanGaps: false,

          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            yAlign: 'bottom',
            callbacks: {
              labelTextColor: function (context) {
                return '#543453';
              },
            },
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          legend: {
            position: "top",
            align: "end",
            labels: {
              boxWidth: 10,
              // This more specific font property overrides the global property
              font: {
                size: 12
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            beginAtZero: true
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      },
    });
  }
}                