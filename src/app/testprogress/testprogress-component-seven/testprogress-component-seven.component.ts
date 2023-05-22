import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-testprogress-component-seven',
  templateUrl: './testprogress-component-seven.component.html',
  styleUrls: ['./testprogress-component-seven.component.scss']
})
export class TestprogressComponentSevenComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}