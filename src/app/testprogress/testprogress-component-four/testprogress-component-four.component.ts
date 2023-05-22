import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testprogress-component-four',
  templateUrl: './testprogress-component-four.component.html',
  styleUrls: ['./testprogress-component-four.component.scss']
})
export class TestprogressComponentFourComponent implements OnInit {
  dataSource: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
       this.dataSource = data;
    })
  }

}
