import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-six',
  templateUrl: './dashboardothers-component-six.component.html',
  styleUrls: ['./dashboardothers-component-six.component.scss']
})
export class DashboardothersComponentSixComponent implements OnInit {
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/25`).subscribe(data =>{
      this.dataSource = data;
    })
  }
}