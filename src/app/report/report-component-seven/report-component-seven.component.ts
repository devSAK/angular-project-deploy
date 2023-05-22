import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-component-seven',
  templateUrl: './report-component-seven.component.html',
  styleUrls: ['./report-component-seven.component.scss']
})
export class ReportComponentSevenComponent implements OnInit {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  
  constructor() {}

  ngOnInit(): void {
    
  }
}