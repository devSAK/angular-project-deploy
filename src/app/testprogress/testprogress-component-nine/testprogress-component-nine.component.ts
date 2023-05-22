import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testprogress-component-nine',
  templateUrl: './testprogress-component-nine.component.html',
  styleUrls: ['./testprogress-component-nine.component.scss']
})
export class TestprogressComponentNineComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: any;
  color: any;

  constructor() { }

  ngOnInit(): void {
  }

}
