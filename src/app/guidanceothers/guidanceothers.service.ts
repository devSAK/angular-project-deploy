import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuidanceothersService {
  private configGuidanceSharedData: Subject<any> = new Subject<any>();
  configGuidanceSharedData$: Observable<any> = this.configGuidanceSharedData.asObservable();

  constructor() { }

  setData(updatedData:any) {
    this.configGuidanceSharedData.next(updatedData);
  }   
}