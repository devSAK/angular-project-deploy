import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-nav-bar',
  templateUrl: './sample-nav-bar.component.html',
  styleUrls: ['./sample-nav-bar.component.scss']
})
export class SampleNavBarComponent implements OnInit {
  isActiveDashboard: boolean = false;
  isActiveDashboardOthers: boolean = false;
  isActiveDiagram: boolean = false;

  isActiveGuidance: boolean = false;
  isActiveGuidanceOthers: boolean = false;

  isActiveTestprogress: boolean = false;
  isActiveTestprogressOthers: boolean = false;

  isActiveReport: boolean = false;
  isActiveReportOthers: boolean = false;

  constructor(location: Location, router: Router) {
    // decide what to do when this event is triggered.
    router.events.subscribe(val => {
      if (location.path() == "/dashboard" || location.path() == "") {
        this.isActiveDashboard = true;
      } else {
        this.isActiveDashboard = false;
      }

      if (location.path() == "/dashboardothers") {
        this.isActiveDashboardOthers = true;
      } else {
        this.isActiveDashboardOthers = false;
      }

      if (location.path() == "/guidance") {
        this.isActiveGuidance = true;
      } else {
        this.isActiveGuidance = false;
      }

      if (location.path() == "/guidanceothers") {
        this.isActiveGuidanceOthers = true;
      } else {
        this.isActiveGuidanceOthers = false;
      }

      if (location.path() == "/testprogress") {
        this.isActiveTestprogress = true;
      } else {
        this.isActiveTestprogress = false;
      }

      if (location.path() == "/testprogressothers") {
        this.isActiveTestprogressOthers = true;
      } else {
        this.isActiveTestprogressOthers = false;
      }

      if (location.path() == "/report") {
        this.isActiveReport = true;
      } else {
        this.isActiveReport = false;
      }

      if (location.path() == "/reportothers") {
        this.isActiveReportOthers = true;
      } else {
        this.isActiveReportOthers = false;
      }

      if (location.path() == "/diagram") {
        this.isActiveDiagram = true;
      } else {
        this.isActiveDiagram = false;
      }

    });
  }
  
  ngOnInit(): void {
  }

  sharedServDestroyObj: any;
  ngOnDestroy() {
    if (this.sharedServDestroyObj)
      this.sharedServDestroyObj.unsubscribe();
  }

}
