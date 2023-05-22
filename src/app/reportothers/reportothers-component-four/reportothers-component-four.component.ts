import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// interface DataObj {
//   id: string;
//   name: string;
// }

@Component({
  selector: 'app-reportothers-component-four',
  templateUrl: './reportothers-component-four.component.html',
  styleUrls: ['./reportothers-component-four.component.scss']
})
export class ReportothersComponentFourComponent implements OnInit {
  // slides = [
  //   { img: 'https://via.placeholder.com/600.png/09f/fff' },
  //   { img: 'https://via.placeholder.com/600.png/021/fff' },
  //   { img: 'https://via.placeholder.com/600.png/321/fff' },
  //   { img: 'https://via.placeholder.com/600.png/422/fff' },
  //   { img: 'https://via.placeholder.com/600.png/654/fff' },
  // ];
  // slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }
  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }
  // afterChange(e: any) {
  //   console.log('afterChange');
  // }
  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }

  chosenObj: any;
  // Data: DataObj[] = [
  //   { id: 'one', name: 'Food' },
  //   { id: 'two', name: 'Travel' },
  //   { id: 'three', name: 'Education' },
  //   { id: 'four', name: 'Goverment' },
  // ];
  dataSource: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.apiDomainUrl}todos`).subscribe(data =>{
      this.dataSource = data;
    })
  }
}