import { Component, OnInit } from '@angular/core';
  
// interface USERS {
//     id: Number;
//     name: String;
//     username: String;
//     email: String;
// }

@Component({
  selector: 'app-reportothers-component-three',
  templateUrl: './reportothers-component-three.component.html',
  styleUrls: ['./reportothers-component-three.component.scss']
})
export class ReportothersComponentThreeComponent implements OnInit {

  ngOnInit(): void {
  }

  // Users: USERS[] = UsersJson;
  constructor(){
    // console.log(this.Users);
  }
}
