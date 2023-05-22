import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard-component-two',
  templateUrl: './dashboard-component-two.component.html',
  styleUrls: ['./dashboard-component-two.component.scss']
})
export class DashboardComponentTwoComponent implements OnInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  
  dataSource: any = [];
  term: any;

  progressSpinner: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      this.progressSpinner = true;
      if(data != ''){
        this.dataSource = data;
        this.progressSpinner = false;
      }
      this.dataSource.paginator = this.paginator;
    },
    error=> console.error(error));
  }

  // onClick(){ 
  // }
  
  createcurrSub: any;
  ngOnDestroy() {
    if(this.createcurrSub)
      this.createcurrSub.unsubscribe();
  }
}
