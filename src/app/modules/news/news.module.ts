import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {NewsListComponent} from './news-list/news-list.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {NewsPaginationComponent} from "./news-pagination/news-pagination.component";
import {NewsCategorySelectorComponent} from "./news-category-selector/news-category-selector.component";
import {NewsCardComponent} from "./news-card/news-card.component";

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsListComponent,
    NewsPaginationComponent,
    NewsCategorySelectorComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class NewsModule {
}
