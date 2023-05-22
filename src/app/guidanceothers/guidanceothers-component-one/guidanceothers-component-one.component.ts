import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guidanceothers-component-one',
  templateUrl: './guidanceothers-component-one.component.html',
  styleUrls: ['./guidanceothers-component-one.component.scss']
})
export class GuidanceothersComponentOneComponent implements OnInit {
  customerName: any;
  customerList: any[];
  
  constructor() {
    this.customerList = [];
    this.customerName = '';
   }

  addCustomer(){
    this.customerList.push(this.customerName);
  }
     
  ngOnInit(): void {}
    
}