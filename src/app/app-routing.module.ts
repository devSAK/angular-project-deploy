import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardothersComponent } from './dashboardothers/dashboardothers.component';
import { DiagramComponent } from './diagram/diagram.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { GuidanceothersComponent } from './guidanceothers/guidanceothers.component';
import { ReportComponent } from './report/report.component';
import { ReportothersComponent } from './reportothers/reportothers.component';
import { TestprogressComponent } from './testprogress/testprogress.component';
import { TestprogressothersComponent } from './testprogressothers/testprogressothers.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent,
  },
  {
    path:'diagram',
    component: DiagramComponent,
  },
  {
    path:'dashboardothers',
    component: DashboardothersComponent,
  },
  {
    path:'guidance',
    component: GuidanceComponent,
  },
  {
    path:'guidanceothers',
    component: GuidanceothersComponent,
  },
  {
    path:'testprogress',
    component: TestprogressComponent,
  },
  {
    path:'testprogressothers',
    component: TestprogressothersComponent,
  },
  {
    path:'report',
    component: ReportComponent,
  },
  {
    path:'reportothers',
    component: ReportothersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
