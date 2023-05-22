import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-testprogress-component-eight',
  templateUrl: './testprogress-component-eight.component.html',
  styleUrls: ['./testprogress-component-eight.component.scss']
})
export class TestprogressComponentEightComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() {}

  ngOnInit(): void {
    
  }
}