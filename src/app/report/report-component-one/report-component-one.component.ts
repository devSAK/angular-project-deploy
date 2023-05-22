import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/dataload.service';

@Component({
  selector: 'app-report-component-one',
  templateUrl: './report-component-one.component.html',
  styleUrls: ['./report-component-one.component.scss']
})
export class ReportComponentOneComponent implements OnInit{
  selectedValue: any;

  dataSource: any = [];
  
  constructor(private callData: DataloadService) {}

  ngOnInit(): void {
    this.callData.getData().subscribe(data=>{
      if(data !='') {
        this.dataSource = data;
      }
    }, 
    error => console.error(error));
  }
}