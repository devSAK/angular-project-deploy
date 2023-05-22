import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Self import library :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AgGridModule } from 'ag-grid-angular';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxCaptureModule } from 'ngx-capture';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WebcamModule } from 'ngx-webcam';
// import { SlickCarouselModule } from 'ngx-slick-carousel'; // Facing Error

// Component import :
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Self-Created Component import :
import { SampleConstComponent } from './sample-const/sample-const.component';
import { SampleNavBarComponent } from './sample-nav-bar/sample-nav-bar.component';

// Dashboard :
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardothersComponent } from './dashboardothers/dashboardothers.component';
import { DashboardComponentOneComponent } from './dashboard/dashboard-component-one/dashboard-component-one.component';
import { DashboardComponentTwoComponent } from './dashboard/dashboard-component-two/dashboard-component-two.component';
import { DashboardComponentThreeComponent } from './dashboard/dashboard-component-three/dashboard-component-three.component';
import { DashboardComponentFourComponent } from './dashboard/dashboard-component-four/dashboard-component-four.component';
import { DashboardComponentFiveComponent } from './dashboard/dashboard-component-five/dashboard-component-five.component';
import { DashboardComponentSixComponent } from './dashboard/dashboard-component-six/dashboard-component-six.component';
import { DashboardComponentSevenComponent } from './dashboard/dashboard-component-seven/dashboard-component-seven.component';
import { DashboardComponentEightComponent } from './dashboard/dashboard-component-eight/dashboard-component-eight.component';
import { DashboardComponentNineComponent } from './dashboard/dashboard-component-nine/dashboard-component-nine.component';

import { DashboardothersComponentOneComponent } from './dashboardothers/dashboardothers-component-one/dashboardothers-component-one.component';
import { DashboardothersComponentTwoComponent } from './dashboardothers/dashboardothers-component-two/dashboardothers-component-two.component';
import { DashboardothersComponentThreeComponent } from './dashboardothers/dashboardothers-component-three/dashboardothers-component-three.component';
import { DashboardothersComponentFourComponent } from './dashboardothers/dashboardothers-component-four/dashboardothers-component-four.component';
import { DashboardothersComponentFiveComponent } from './dashboardothers/dashboardothers-component-five/dashboardothers-component-five.component';
import { HelloComponent } from './dashboardothers/dashboardothers-component-five/hello.component';
import { DashboardothersComponentSixComponent } from './dashboardothers/dashboardothers-component-six/dashboardothers-component-six.component';
import { DashboardothersComponentSevenComponent } from './dashboardothers/dashboardothers-component-seven/dashboardothers-component-seven.component';
import { DashboardothersComponentEightComponent } from './dashboardothers/dashboardothers-component-eight/dashboardothers-component-eight.component';
import { DashboardothersComponentNineComponent } from './dashboardothers/dashboardothers-component-nine/dashboardothers-component-nine.component';
import { DiagramComponent } from './diagram/diagram.component';

// Guidance :
import { GuidanceComponent } from './guidance/guidance.component';
import { GuidanceothersComponent } from './guidanceothers/guidanceothers.component';
import { GuidanceComponentOneComponent } from './guidance/guidance-component-one/guidance-component-one.component';
import { GuidanceComponentTwoComponent } from './guidance/guidance-component-two/guidance-component-two.component';
import { GuidanceComponentThreeComponent } from './guidance/guidance-component-three/guidance-component-three.component';
import { GuidanceComponentFourComponent } from './guidance/guidance-component-four/guidance-component-four.component';
import { PopUpComponent } from './guidance/guidance-component-four/pop-up/pop-up.component';
import { GuidanceComponentFiveComponent } from './guidance/guidance-component-five/guidance-component-five.component';
import { BottomSheetComponent } from './guidance/guidance-component-five/bottom-sheet/bottom-sheet.component';
import { GuidanceComponentSixComponent } from './guidance/guidance-component-six/guidance-component-six.component';
import { GuidanceComponentSevenComponent } from './guidance/guidance-component-seven/guidance-component-seven.component';
import { GuidanceComponentEightComponent } from './guidance/guidance-component-eight/guidance-component-eight.component';
import { GuidanceComponentNineComponent } from './guidance/guidance-component-nine/guidance-component-nine.component';

import { GuidanceothersComponentOneComponent } from './guidanceothers/guidanceothers-component-one/guidanceothers-component-one.component';
import { GuidanceothersComponentTwoComponent } from './guidanceothers/guidanceothers-component-two/guidanceothers-component-two.component';
import { GuidanceothersComponentThreeComponent } from './guidanceothers/guidanceothers-component-three/guidanceothers-component-three.component';
import { GuidanceothersComponentFourComponent } from './guidanceothers/guidanceothers-component-four/guidanceothers-component-four.component';
import { ChildComponent } from './dashboard/dashboard-component-eight/child/child.component';

// Testprogress :
import { TestprogressComponent } from './testprogress/testprogress.component';
import { TestprogressothersComponent } from './testprogressothers/testprogressothers.component';
import { TestprogressComponentOneComponent } from './testprogress/testprogress-component-one/testprogress-component-one.component';
import { TestprogressComponentTwoComponent } from './testprogress/testprogress-component-two/testprogress-component-two.component';
import { TestprogressComponentThreeComponent } from './testprogress/testprogress-component-three/testprogress-component-three.component';
import { TestprogressComponentFourComponent } from './testprogress/testprogress-component-four/testprogress-component-four.component';
import { TestprogressComponentFiveComponent } from './testprogress/testprogress-component-five/testprogress-component-five.component';
import { TestprogressComponentSixComponent } from './testprogress/testprogress-component-six/testprogress-component-six.component';
import { TestprogressComponentSevenComponent } from './testprogress/testprogress-component-seven/testprogress-component-seven.component';
import { TestprogressComponentEightComponent } from './testprogress/testprogress-component-eight/testprogress-component-eight.component';
import { TestprogressComponentNineComponent } from './testprogress/testprogress-component-nine/testprogress-component-nine.component';

import { TestprogressothersComponentOneComponent } from './testprogressothers/testprogressothers-component-one/testprogressothers-component-one.component';
import { TestprogressothersComponentTwoComponent } from './testprogressothers/testprogressothers-component-two/testprogressothers-component-two.component';
import { TestprogressothersComponentThreeComponent } from './testprogressothers/testprogressothers-component-three/testprogressothers-component-three.component';
import { TestprogressothersComponentFourComponent } from './testprogressothers/testprogressothers-component-four/testprogressothers-component-four.component';
import { TestprogressothersComponentFiveComponent } from './testprogressothers/testprogressothers-component-five/testprogressothers-component-five.component';
import { TestprogressothersComponentSixComponent } from './testprogressothers/testprogressothers-component-six/testprogressothers-component-six.component';
import { TestprogressothersComponentSevenComponent } from './testprogressothers/testprogressothers-component-seven/testprogressothers-component-seven.component';
import { TestprogressothersComponentEightComponent } from './testprogressothers/testprogressothers-component-eight/testprogressothers-component-eight.component';
import { TestprogressothersComponentNineComponent } from './testprogressothers/testprogressothers-component-nine/testprogressothers-component-nine.component';

// Report :
import { ReportComponent } from './report/report.component';
import { ReportothersComponent } from './reportothers/reportothers.component';
import { ReportComponentOneComponent } from './report/report-component-one/report-component-one.component';
import { ReportComponentTwoComponent } from './report/report-component-two/report-component-two.component';
import { ReportComponentFourComponent } from './report/report-component-four/report-component-four.component';
import { ReportComponentThreeComponent } from './report/report-component-three/report-component-three.component';
import { ReportComponentFiveComponent } from './report/report-component-five/report-component-five.component';
import { ReportComponentSixComponent } from './report/report-component-six/report-component-six.component';
import { ReportComponentSevenComponent } from './report/report-component-seven/report-component-seven.component';
import { ReportComponentEightComponent } from './report/report-component-eight/report-component-eight.component';
import { ReportComponentNineComponent } from './report/report-component-nine/report-component-nine.component';
import { DialogBoxComponent } from './guidance/guidance-component-eight/dialog-box/dialog-box.component';

// Filter :
import { SampleFilterComponent } from './sample-filter/sample-filter.component';
import { ReportothersComponentOneComponent } from './reportothers/reportothers-component-one/reportothers-component-one.component';
import { ReportothersComponentTwoComponent } from './reportothers/reportothers-component-two/reportothers-component-two.component';
import { ReportothersComponentThreeComponent } from './reportothers/reportothers-component-three/reportothers-component-three.component';
import { ReportothersComponentFourComponent } from './reportothers/reportothers-component-four/reportothers-component-four.component';
import { ReportothersComponentFiveComponent } from './reportothers/reportothers-component-five/reportothers-component-five.component';
import { ReportothersComponentSixComponent } from './reportothers/reportothers-component-six/reportothers-component-six.component';
import { ReportothersComponentSevenComponent } from './reportothers/reportothers-component-seven/reportothers-component-seven.component';
import { ReportothersComponentEightComponent } from './reportothers/reportothers-component-eight/reportothers-component-eight.component';
import { ReportothersComponentNineComponent } from './reportothers/reportothers-component-nine/reportothers-component-nine.component';
import { CustomerTableComponent } from './guidanceothers/guidanceothers-component-one/customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleConstComponent,
    SampleNavBarComponent,
    
    // Dashboard :
    DashboardComponent,
    DashboardothersComponent,
    DashboardComponentOneComponent,
    DashboardComponentTwoComponent,
    DashboardComponentThreeComponent,
    DashboardComponentFourComponent,
    DashboardComponentFiveComponent,
    DashboardComponentSixComponent,
    DashboardComponentSevenComponent,
    DashboardComponentEightComponent,
    DashboardComponentNineComponent,
    // Dashboard Others
    DashboardothersComponentOneComponent,
    DashboardothersComponentTwoComponent,
    DashboardothersComponentThreeComponent,
    DashboardothersComponentFourComponent,
    DashboardothersComponentFiveComponent,
    DashboardothersComponentSixComponent,
    DashboardothersComponentSevenComponent,
    DashboardothersComponentEightComponent,
    DashboardothersComponentNineComponent,
    HelloComponent,
    
    // Guidance :
    GuidanceComponent,
    GuidanceothersComponent,
    GuidanceComponentOneComponent,
    GuidanceComponentTwoComponent,
    GuidanceComponentThreeComponent,
    GuidanceComponentFourComponent,
    GuidanceComponentFiveComponent,
    GuidanceComponentSixComponent,
    GuidanceComponentSevenComponent,
    GuidanceComponentEightComponent,
    GuidanceComponentNineComponent,
    // Guidance Others
    GuidanceothersComponentOneComponent,
    GuidanceothersComponentTwoComponent,
    GuidanceothersComponentThreeComponent,
    GuidanceothersComponentFourComponent,
    ChildComponent,

    // Testprogress :
    TestprogressComponent,
    TestprogressothersComponent,
    TestprogressComponentOneComponent,
    TestprogressComponentTwoComponent,
    TestprogressComponentThreeComponent,
    TestprogressComponentFourComponent,
    TestprogressComponentFiveComponent,
    TestprogressComponentSixComponent,
    TestprogressComponentSevenComponent,
    TestprogressComponentEightComponent,
    TestprogressComponentNineComponent,
    PopUpComponent,
    BottomSheetComponent,
    //Testprogress Others
    TestprogressothersComponentOneComponent,
    TestprogressothersComponentTwoComponent,
    TestprogressothersComponentThreeComponent,
    TestprogressothersComponentFourComponent,
    TestprogressothersComponentFiveComponent,
    TestprogressothersComponentSixComponent,
    TestprogressothersComponentSevenComponent,
    TestprogressothersComponentEightComponent,
    TestprogressothersComponentNineComponent,
    
    // Report :
    ReportComponent,
    ReportothersComponent,
    ReportComponentOneComponent,
    ReportComponentTwoComponent,
    ReportComponentFourComponent,
    ReportComponentThreeComponent,
    ReportComponentFiveComponent,
    ReportComponentSixComponent,
    ReportComponentSevenComponent,
    ReportComponentEightComponent,
    ReportComponentNineComponent,
    DialogBoxComponent,

    // Filter :
    SampleFilterComponent,
    ReportothersComponentOneComponent,
    ReportothersComponentTwoComponent,
    ReportothersComponentThreeComponent,
    ReportothersComponentFourComponent,
    ReportothersComponentFiveComponent,
    ReportothersComponentSixComponent,
    ReportothersComponentSevenComponent,
    ReportothersComponentEightComponent,
    ReportothersComponentNineComponent,
    CustomerTableComponent,
    DiagramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    CdkAccordionModule,
    AgGridModule,
    NgChartjsModule,
    NgxCaptureModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": -12,
      "radius": 10,
      "space": -4,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#808080",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 4,
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": true,
      "showUnits": true,
      "clockwise": true,
      "showSubtitle": false,
      "titleFontSize": "12",
    }),
    Ng2SearchPipeModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'GOOGLE API KEY',
    //   libraries: ['places']
    // }),
    WebcamModule,
    // SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }