import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  @Input('customers')
  customerList: any[];

  constructor() { 
    this.customerList = [];
  }

  ngOnInit(): void {
  }
}