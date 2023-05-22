import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reportothers-component-two',
  templateUrl: './reportothers-component-two.component.html',
  styleUrls: ['./reportothers-component-two.component.scss']
})
export class ReportothersComponentTwoComponent implements OnInit {
  status: any;
  errorMessage: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.delete(`${environment.apiDomainUrl}posts/1`).subscribe({
    // this.http.delete(`${environment.apiDomainUrl}invalid-url`).subscribe({
      next: data => {
          this.status = 'Delete successful';
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      }
    );
  }
}