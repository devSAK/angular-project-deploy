import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-seven',
  templateUrl: './dashboardothers-component-seven.component.html',
  styleUrls: ['./dashboardothers-component-seven.component.scss']
})
export class DashboardothersComponentSevenComponent implements OnInit {
  showSpinner = true;
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  //this.http.get('http://YourApiAddress').subscribe(data => {
    this.http.get(`${environment.apiDomainUrl}todos/11`).subscribe(data => {
      this.dataSource = data;
      this.showSpinner = false;
    }, error => console.error(error));
  }
}
