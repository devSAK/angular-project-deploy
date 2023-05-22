import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testprogressothers-component-six',
  templateUrl: './testprogressothers-component-six.component.html',
  styleUrls: ['./testprogressothers-component-six.component.scss']
})
export class TestprogressothersComponentSixComponent implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef | undefined;
  lineChart: Chart<"line", number[], string> | undefined;

  datalabels: any = [];
  id: any = [];
  userId: any = [];
  completed: any = [];
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
        if (this.completed != null && this.completed.length > 0) {
          this.completed.length = 0;
        }
        this.dataSource = resultComp;

        for (let i of this.dataSource) {
          this.id.push(i['id']);
          this.userId.push(i['userId']);
          this.completed.push(i['completed']);
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
    Chart.defaults.font.size = 7;
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ['true','false'],
        datasets: [
          {
            label: 'First Dataset',
            data: this.completed[0],
            backgroundColor: 'rgb(255, 99, 132)'
          }
        ]
      }
    })
  }
}