import { Component } from '@angular/core';

/**
 * @title Badge overview
 */

@Component({
  selector: 'app-dashboard-component-five',
  templateUrl: './dashboard-component-five.component.html',
  styleUrls: ['./dashboard-component-five.component.scss']
})
export class DashboardComponentFiveComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
