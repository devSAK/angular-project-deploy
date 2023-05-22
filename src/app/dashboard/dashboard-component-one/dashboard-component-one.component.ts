import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-dashboard-component-one',
  templateUrl: './dashboard-component-one.component.html',
  styleUrls: ['./dashboard-component-one.component.scss']
})
export class DashboardComponentOneComponent {
  positionOptions: TooltipPosition[] = ['after','before','below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}