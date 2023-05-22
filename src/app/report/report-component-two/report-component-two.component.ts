import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/dataload.service';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-report-component-two',
  templateUrl: './report-component-two.component.html',
  styleUrls: ['./report-component-two.component.scss']
})
export class ReportComponentTwoComponent implements OnInit {
  dataSource: any;

  constructor(private http: HttpClient, private callData: DataloadService) { }

  ngOnInit(): void {
    // this.callData.getData().subscribe(data=>{
    this.http.get(`${environment.apiDomainUrl}todos/12`).subscribe(data=>{
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