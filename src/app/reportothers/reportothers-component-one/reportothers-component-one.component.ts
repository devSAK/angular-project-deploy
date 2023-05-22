import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reportothers-component-one',
  templateUrl: './reportothers-component-one.component.html',
  styleUrls: ['./reportothers-component-one.component.scss']
})
export class ReportothersComponentOneComponent implements OnInit {
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}photos/1`).subscribe(data => {
      this.dataSource = data;
    })
  }
}