import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testprogressothers-component-four',
  templateUrl: './testprogressothers-component-four.component.html',
  styleUrls: ['./testprogressothers-component-four.component.scss']
})
export class TestprogressothersComponentFourComponent implements OnInit {
  private datalabels: any = [];
  private successfailureConfigChart: any;

  successfailureApi: any;
  totalCount: any = [];
  id: any = [];
  userId: any = [];
  responseCheck: boolean = false;
  progressSpinner: boolean = true;

  constructor(private http: HttpClient) { }

  private successfailureConfig: any = {
    type: 'bar',
    data: {
      labels: this.datalabels,
      datasets: [{
        label: 'Success',
        data: this.id,
        backgroundColor: [
          '#ff99ff'
        ],
        barPercentage: 0.5,
        borderWidth: 1,
        barThickness: 60,
        borderRadius: 4,
      },

      {
        label: 'Failure',
        data: this.userId,
        backgroundColor: [
          '#4B088A'
        ],
        barPercentage: 0.5,
        borderWidth: 1,
        barThickness: 60,
        borderRadius: 4,
      }

      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false
          }
        }
      },
      plugins: {
        tooltip: {
          yAlign: 'bottom',
          callbacks: {
            labelTextColor: function () {
              return '#543453';
            },
          },
          backgroundColor: '#FFFFFF',
        },
        legend: {
          position: "right",
          align: "start",
          labels: {
            boxWidth: 10,
            // This more specific font property overrides the global property
            font: {
              size: 12
            }
          }
        }
      },
    },
  }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(resultComp => {
      if (resultComp != '' && resultComp != null && resultComp != undefined) {
        if (this.successfailureConfigChart != null || this.successfailureConfigChart != undefined) {
          this.successfailureConfigChart.destroy();
        }
        if (this.datalabels != null && this.datalabels.length > 0) {
          this.datalabels.length = 0;
        }
        if (this.totalCount != null && this.totalCount.length > 0) {
          this.totalCount.length = 0;
        }
        if (this.id != null && this.id.length > 0) {
          this.id.length = 0;
        }
        if (this.userId != null && this.userId.length > 0) {
          this.userId.length = 0;
        }
        this.successfailureApi = resultComp;

        for (let i of this.successfailureApi) {
          if (i.devPriority != null && i.devPriority != undefined && i.devPriority != '') {
            this.datalabels.push(i['devPriority']);
          }
          if (i.id != null && i.id != undefined && i.id != '') {
            this.id.push(i['id']);
            if (i['id'] != 0 && i['id'] != '' && i['id'] != undefined && i['id'] != null) {
              this.responseCheck = true;
            }
          }
          if (i.userId != null && i.userId != undefined && i.userId != '') {
            this.userId.push(i['userId']);
            if (i['userId'] != 0 && i['userId'] != '' && i['userId'] != undefined && i['userId'] != null) {
              this.responseCheck = true;
            }
          }
        }

        setTimeout(() => {
          this.successfailureConfigChart = new Chart('success_failure_by_test_priority_chart', this.successfailureConfig);
        });
        this.progressSpinner = false;
      } else {
        this.responseCheck = false;
        this.progressSpinner = false;
      }
    });
  }
}