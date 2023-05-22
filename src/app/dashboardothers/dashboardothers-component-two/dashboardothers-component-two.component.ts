import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/dataload.service';

@Component({
  selector: 'app-dashboardothers-component-two',
  templateUrl: './dashboardothers-component-two.component.html',
  styleUrls: ['./dashboardothers-component-two.component.scss']
})
export class DashboardothersComponentTwoComponent implements OnInit {
  dataSource: any;

	columnDefs = [
		{
      headerName: 'ID',
      field: 'id',
      width: 120 
    },
		{
      headerName: 'TITLE', 
      field: 'title',
      width: 120
    },
		{
      headerName: 'USER ID', 
      field: 'userId',
      width: 120
    },
    {
      headerName: 'COMPLETED', 
      field: 'completed'
    }
	];

	rowData: any[] = [];

  defaultColDef = {
    sortable: true,
  };

  constructor(private callData: DataloadService) { }

  ngOnInit(): void {
    let tempArr: any[] = [];
    this.dataSource = [];
    this.dataSource.length = 0;
    this.callData.getData().subscribe(data=>{
      if(data != ''){
        this.dataSource = data;
        for (let instance of this.dataSource) {
          tempArr.push({
            id: instance['id'],
            title: instance['title'],
            userId: instance['userId'],
            completed: instance['completed'],
          });
        }
        this.rowData = tempArr; 
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