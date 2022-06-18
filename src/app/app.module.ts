import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
//components
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsCategorySelectorComponent } from './components/news-category-selector/news-category-selector.component';
import { NewsPaginationComponent } from './components/news-pagination/news-pagination.component';
//services

import { NewsService } from "./services/news.service";


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    HeaderComponent,
    NewsCardComponent,
    NewsCategorySelectorComponent,
    NewsPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
