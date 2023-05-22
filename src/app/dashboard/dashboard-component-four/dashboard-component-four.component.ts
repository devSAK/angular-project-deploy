import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-component-four',
  templateUrl: './dashboard-component-four.component.html',
  styleUrls: ['./dashboard-component-four.component.scss']
})

export class DashboardComponentFourComponent implements OnInit {
  myControl = new FormControl('');

  dataSource: any[] = [];
  sampleDatas: any;
  term: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sampleDatas = new FormGroup({
      sampletitle: new FormControl(null, Validators.required)
    });
    this.getsampleTitle();
  }

  getsampleTitle() {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}