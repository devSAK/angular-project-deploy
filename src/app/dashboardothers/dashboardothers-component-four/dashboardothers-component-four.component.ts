import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboardothers-component-four',
  templateUrl: './dashboardothers-component-four.component.html',
  styleUrls: ['./dashboardothers-component-four.component.scss']
})
export class DashboardothersComponentFourComponent implements OnInit {
  chosenObj: any;
  dataSource: any = [];
  
  // Data: DataObj[] = [
  //   { id: 'one', name: 'Food' },
  //   { id: 'two', name: 'Travel' },
  //   { id: 'three', name: 'Education' },
  //   { id: 'four', name: 'Goverment' },
  // ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos`).subscribe(data =>{
      console.log("data", data)
      this.dataSource = data;
    })
  }
}

// interface DataObj {
//   id: string;
//   name: string;
// }