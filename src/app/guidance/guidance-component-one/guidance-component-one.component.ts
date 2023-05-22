import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/dataload.service';

@Component({
  selector: 'app-guidance-component-one',
  templateUrl: './guidance-component-one.component.html',
  styleUrls: ['./guidance-component-one.component.scss']
})
export class GuidanceComponentOneComponent implements OnInit {
  selectedItemsList: any = [];
  // checkedIDs: any = [];
  dataSource: any[] = []

  constructor(private callData: DataloadService) {}

  ngOnInit(): void {
    this.fetchSelectedItems();
    // this.fetchCheckedIDs()
    
    this.callData.getData2().subscribe(data=> {
      if(data != undefined && data != null && data !=''){
        this.dataSource = data;
      }
    },
    error => console.error(error));
  }

  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.dataSource.filter((value, index) => {
      return value.isChecked;
    });
  }

  // fetchCheckedIDs() {
  //   this.checkedIDs = []
  //   this.checkboxesDataList.forEach((value, index) => {
  //     if (value.isChecked) {
  //       this.checkedIDs.push(value.id);
  //     }
  //   });
  // }

}