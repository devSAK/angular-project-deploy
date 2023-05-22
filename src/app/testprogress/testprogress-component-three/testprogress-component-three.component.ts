import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';

export interface Section {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-testprogress-component-three',
  templateUrl: './testprogress-component-three.component.html',
  styleUrls: ['./testprogress-component-three.component.scss']
})
export class TestprogressComponentThreeComponent implements OnInit{
  folders: Section[] = [];
  notes: Section[] = [];
  dataSource: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      if(data != ''){
        this.dataSource = data;
      }
    })
  }
}