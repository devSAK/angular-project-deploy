import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardothersSharedService {
  private buildhealthSharedData: Subject<any> = new Subject<any>();
  buildhealthSharedData$: Observable<any> = this.buildhealthSharedData.asObservable();
  dashboardSharedData$: any;
  
  constructor() { }
  setData(updatedData:any) {
    this.buildhealthSharedData.next(updatedData);
  }
}