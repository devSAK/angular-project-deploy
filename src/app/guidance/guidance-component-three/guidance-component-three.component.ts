import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-guidance-component-three',
  templateUrl: './guidance-component-three.component.html',
  styleUrls: ['./guidance-component-three.component.scss']
})
export class GuidanceComponentThreeComponent implements OnInit {
  favoriteTitle: any;
  dataSource: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      this.dataSource = data;
    })
  }
}