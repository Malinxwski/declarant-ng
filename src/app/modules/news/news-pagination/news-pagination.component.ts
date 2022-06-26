import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news-pagination',
  templateUrl: './news-pagination.component.html',
  styleUrls: ['./news-pagination.component.scss']
})

export class NewsPaginationComponent implements OnInit {


  @Input() currentPage: number = 1;
  @Input() perPage: number = 2;
  @Output() pageChange = new EventEmitter<number>()
  @Output() perPageChange = new EventEmitter<number>()

  constructor() {

  }

  perPageItems = [10, 15, 20, 30];

  perPageChanged() {
    this.perPageChange.emit(this.perPage)
  }

  nextPage() {
    this.currentPage = ++this.currentPage
    this.pageChange.emit(this.currentPage)
  };

  prevPage() {
    this.currentPage = --this.currentPage
    this.pageChange.emit(this.currentPage)
  }


  ngOnInit(): void {

  }



}
