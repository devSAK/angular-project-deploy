import { Component, OnInit } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-guidanceothers',
  templateUrl: './guidanceothers.component.html',
  styleUrls: ['./guidanceothers.component.scss']
})
export class GuidanceothersComponent implements OnInit {
  showGuidanceothers: boolean = true;
  progressLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.progressLoader = true;
    this.showGuidanceothers = false; 
      
    setTimeout(() => {
      this.showGuidanceothers = true;  
      this.progressLoader = false;
    }, 250);
  }
  clear(){
    this.showGuidanceothers = false;   
  }

}