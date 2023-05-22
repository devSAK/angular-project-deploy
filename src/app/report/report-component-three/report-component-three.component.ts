import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-report-component-three',
  templateUrl: './report-component-three.component.html',
  styleUrls: ['./report-component-three.component.scss']
})
export class ReportComponentThreeComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor() {}

  ngOnInit(): void {
    
  }
}
