import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DataloadService } from 'src/app/dataload.service';

export interface Dessert {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

@Component({
  selector: 'app-report-component-six',
  templateUrl: './report-component-six.component.html',
  styleUrls: ['./report-component-six.component.scss']
})

export class ReportComponentSixComponent implements OnInit{
  desserts: Dessert[] = [];
  sortedData: Dessert[] = [];
  dataSource: any = [];

  constructor(private callData: DataloadService) {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit(): void {
    this.callData.getData().subscribe(data=>{
      if(data !=''){
        this.dataSource = data;
      }
    })
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.id, b.title, isAsc);
        case 'calories':
          return compare(a.id, b.title, isAsc);
        case 'fat':
          return compare(a.id, b.title, isAsc);
        case 'carbs':
          return compare(a.id, b.title, isAsc);
        case 'protein':
          return compare(a.id, b.title, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
