import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-component-six',
  templateUrl: './dashboard-component-six.component.html',
  styleUrls: ['./dashboard-component-six.component.scss']
})
export class DashboardComponentSixComponent implements OnInit {
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}photos/23`).subscribe(data => {
      this.dataSource = data;
    })
  }

  link: any;
  goToLink(){
    this.link = `${environment.apiDomainUrl}photos/1`;
    window.open(this.link,'_blank');
  }

  status: any;
  toDelete(){
    this.http.delete(`${environment.apiDomainUrl}posts/1`).subscribe(() => this.status = 'Delete successful');
  }

}