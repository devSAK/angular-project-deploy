import { Component } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-guidance-component-nine',
  templateUrl: './guidance-component-nine.component.html',
  styleUrls: ['./guidance-component-nine.component.scss']
})
export class GuidanceComponentNineComponent {
  tiles: Tile[] = [
    {text: 'Blue', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Green', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Pink', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Violet', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}