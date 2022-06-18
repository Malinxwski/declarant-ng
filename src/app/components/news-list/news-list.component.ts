import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  providers:[NewsService],
})
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  public news = []

  ngOnInit(): void {
    this.newsService.get('https://declarant.by/rest/news').subscribe(res => {
      this.news = res.data.items
    })
  }

}
