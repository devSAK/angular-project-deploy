import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-component-nine',
  templateUrl: './dashboard-component-nine.component.html',
  styleUrls: ['./dashboard-component-nine.component.scss']
})
export class DashboardComponentNineComponent implements OnInit {
  dataSource: any;
  progressSpinner: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(`${environment.apiDomainUrl}todos/22`).subscribe(data=>{
      this.progressSpinner = true;
      if(data != '' && data != null && data != undefined){
        this.dataSource = data;
        this.progressSpinner = false;
      }
    },
    error => console.error(error));
  }
  
  // createcurrSub: any;
  // ngOnDestroy() {
  //   if(this.createcurrSub)
  //     this.createcurrSub.unsubscribe();
  // }
}