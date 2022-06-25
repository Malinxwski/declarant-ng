import {Component, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {NewsService} from "../../../services/news.service";


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  providers: [NewsService]
})
export class NewsListComponent implements OnInit, OnChanges {

  constructor(private newsService: NewsService) {
  }

  news = []
  categories  = []
  currentPage = 1
  perPage = 10
  category = "События"

  fetchNews() {
    this.newsService.getByFilter('https://declarant.by/rest/news', {
      page:this.currentPage,
      perPage:this.perPage,
      newsCategory: this.category
    }).subscribe(res => {
      this.news = res.data.items
      this.categories = res.data.categories
    })
  }

  setPage(newValue:number){
    this.currentPage = newValue
    this.fetchNews()
  }

  setPerPage(newValue:number){
    this.perPage = newValue
    this.fetchNews()
  }
  setCategory(newValue:string){
    this.category = newValue
    this.fetchNews()
  }

  ngOnInit(): void {
    this.fetchNews()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in news-list', changes)
  }

}
