import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/dataload.service';

@Component({
  selector: 'app-dashboardothers-component-one',
  templateUrl: './dashboardothers-component-one.component.html',
  styleUrls: ['./dashboardothers-component-one.component.scss']
})
export class DashboardothersComponentOneComponent implements OnInit {
  expandedIndex = 0;
  dataSource: any;
  progressSpinner: boolean = true;

  constructor(private callData: DataloadService) { }

  ngOnInit(): void {
    this.callData.getData().subscribe(data=>{
      this.progressSpinner = true;
      if(data != ''){
        this.dataSource = data;
        this.progressSpinner = false;
      }
    },
    error => console.error(error));
  }

  createcurrSub: any;
  ngOnDestroy() {
    if(this.createcurrSub)
      this.createcurrSub.unsubscribe();
  }
}