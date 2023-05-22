import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-guidance-component-four',
  templateUrl: './guidance-component-four.component.html',
  styleUrls: ['./guidance-component-four.component.scss']
})
export class GuidanceComponentFourComponent implements OnInit{

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }
}