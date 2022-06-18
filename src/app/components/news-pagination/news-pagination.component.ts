import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-pagination',
  templateUrl: './news-pagination.component.html',
  styleUrls: ['./news-pagination.component.scss']
})
export class NewsPaginationComponent implements OnInit {

  constructor() { }

  public currentPage = 1
  public perPage = 2;
  public perPageItems = [2,4,6,10];

  public perPageChanged(){
    console.log(this.perPage)
  }
  public nextPage(){
    this.currentPage = ++this.currentPage
    console.log(this.currentPage)
  };
  public prevPage(){
    this.currentPage = --this.currentPage
    console.log(this.currentPage)
  }


  ngOnInit(): void {

  }

}
