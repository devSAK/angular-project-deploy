import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface UsersData {
  id: number;
  title: string;
}

@Component({
  selector: 'app-guidance-component-eight',
  templateUrl: './guidance-component-eight.component.html',
  styleUrls: ['./guidance-component-eight.component.scss']
})
export class GuidanceComponentEightComponent implements OnInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  table!: MatTable<any>;
  displayedColumns: string[] = [];
  ELEMENT_DATA: any = [];
  dataSource: any = [];
  progressSpinner: boolean = true;

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'title', 'action'];

    this.http.get(`${environment.apiDomainUrl}todos/`).subscribe(data=>{
      this.progressSpinner = true;   
      if(data !=''){
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource<UsersData>(this.ELEMENT_DATA);
        this.progressSpinner = false;
      }
      this.dataSource.paginator = this.paginator;
    }, 
    error => console.error(error));
  }

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: { title: any; }){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      title:row_obj.title
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj: { id: number; title: string; }){
    this.dataSource = this.dataSource.filter((value: { id: number; title: string; },key: any)=>{
      if(value.id == row_obj.id){
        value.title = row_obj.title;
      }
      return true;
    });
  }
  deleteRowData(row_obj: { id: number; }){
    this.dataSource = this.dataSource.filter((value: { id: number; },key: any)=>{
      return value.id != row_obj.id;
    });
  }
}