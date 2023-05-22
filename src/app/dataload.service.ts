import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataloadService {

  constructor(private http: HttpClient) { }

  getData(){
    //let url='https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(`${environment.apiDomainUrl}todos/`);
  }

  // getData1(){
  //   //let url1='https://reqres.in';
  //   return this.http.get(`${environment.apiDomainUrl1}`);
  // }

  public getData2(): Observable<any>{
    return this.http.get('assets/user.json');
  }
}