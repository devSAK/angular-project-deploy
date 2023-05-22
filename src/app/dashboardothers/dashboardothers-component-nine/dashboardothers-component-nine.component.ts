import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-nine',
  templateUrl: './dashboardothers-component-nine.component.html',
  styleUrls: ['./dashboardothers-component-nine.component.scss']
})
export class DashboardothersComponentNineComponent implements OnInit {
  panelOpenState = false;
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      this.dataSource = data;
    })
  }

}
