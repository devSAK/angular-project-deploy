import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { environment } from 'src/environments/environment';
// import { DataloadService } from 'src/app/dataload.service';

export interface PeriodicElement {
  id: number;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-dashboard-component-three',
  templateUrl: './dashboard-component-three.component.html',
  styleUrls: ['./dashboard-component-three.component.scss']
})

export class DashboardComponentThreeComponent implements OnInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  ELEMENT_DATA : any = [];
  dataSource : any = [];
  displayedColumns: string[] = [];
  
  progressSpinner: boolean = true;

  constructor(private http: HttpClient) {}
  // constructor(private callData: DataloadService) {}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'completed', 'userId'];

    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(
    data => {
    // this.callData.getData2().subscribe(data=>{
      this.progressSpinner = true;   
      if(data !=''){
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        this.progressSpinner = false;
      }
      this.dataSource.paginator = this.paginator;
    }, 
    error => console.error(error));  // error handling
  }
  
  // createcurrSub: any;
  // ngOnDestroy() {
  //   if(this.createcurrSub)
  //     this.createcurrSub.unsubscribe();
  // }
}