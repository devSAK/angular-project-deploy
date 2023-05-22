import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guidance-component-two',
  templateUrl: './guidance-component-two.component.html',
  styleUrls: ['./guidance-component-two.component.scss']
})
export class GuidanceComponentTwoComponent implements OnInit{
  myControl = new FormControl('');
  dataSource: any[] = [];
  sampleDatas: any;

  chosenObj: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sampleDatas = new FormGroup({
      sampletitle: new FormControl(null, [Validators.required])
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