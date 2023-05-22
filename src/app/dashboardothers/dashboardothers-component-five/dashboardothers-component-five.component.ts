import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from "ngx-capture";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-dashboardothers-component-five',
  templateUrl: './dashboardothers-component-five.component.html',
  styleUrls: ['./dashboardothers-component-five.component.scss']
})
export class DashboardothersComponentFiveComponent implements OnInit {
  name = "Angular";
  img = "";

  @ViewChild("screen", { static: true }) screen: any;

  constructor(private captureService: NgxCaptureService) {}

  ngOnInit() {
    this.captureService
      .getImage(this.screen.nativeElement, true)
      .pipe(
        tap(img => {
          this.img = img;
          console.log(img);
        })
      )
      .subscribe();
  }

}
