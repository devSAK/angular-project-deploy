import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sample-filter',
  templateUrl: './sample-filter.component.html',
  styleUrls: ['./sample-filter.component.scss']
})
export class SampleFilterComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  myControl = new FormControl('');

  dataSource: any[] = [];
  term: any;

  constructor(private http: HttpClient) {}

  sampleDatas: any;
  ngOnInit() {
    this.sampleDatas = new FormGroup({
      sampleId: new FormControl(null, Validators.required)
    });
    this.getsampleId();
  }

  searchButtonEnableDisable: boolean = true;
  searchButtonEnableDisableCheck(data: any) {
    this.searchButtonEnableDisable = true;
    let sampleIdTemp = this.sampleDatas.value.sampleId;

    if (sampleIdTemp != null && sampleIdTemp != "") {
      this.searchButtonEnableDisable = false;
    } else {
      this.searchButtonEnableDisable = true;
    }
  }

  getsampleId() {
    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  sampleIdSelected: any;
  getAllDataSelected: any;
  getAllSampleResponseApi: any;

  navigateSearch() {
    this.sampleIdSelected.length = 0;
    this.getAllDataSelected = this.sampleDatas.value.sampleId;
    if (this.getAllDataSelected != null && this.getAllDataSelected != undefined && this.getAllDataSelected != '') {

    }
  }

  clearfields() {
    this.sampleDatas.patchValue({
      sampleId: null,
    });
    this.clearEvent.emit();
  }

}
