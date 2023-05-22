import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-eight',
  templateUrl: './dashboardothers-component-eight.component.html',
  styleUrls: ['./dashboardothers-component-eight.component.scss']
})
export class DashboardothersComponentEightComponent implements OnInit {
  dataSource: any = [];
  term: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      this.dataSource = data;
    }, 
    error => console.error(error));
  }
  
  createcurrSub: any;
  ngOnDestroy() {
    if(this.createcurrSub)
      this.createcurrSub.unsubscribe();
  }

}
