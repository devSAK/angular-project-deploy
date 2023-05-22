import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardSharedServiceService {
  private dashboardSharedData: Subject<any> = new Subject<any>();
  dashboardSharedData$: Observable<any> = this.dashboardSharedData.asObservable();
  buildhealthSharedData$: any;

  constructor() { }

  setData(updatedData:any) {
    this.dashboardSharedData.next(updatedData);
  }
}