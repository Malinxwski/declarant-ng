import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {RoutingModule} from "./routing/routing.module";

//components
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsCategorySelectorComponent } from './components/news-category-selector/news-category-selector.component';
import { NewsPaginationComponent } from './components/news-pagination/news-pagination.component';
//services

import { NewsService } from "./services/news.service";
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    HeaderComponent,
    NewsCardComponent,
    NewsCategorySelectorComponent,
    NewsPaginationComponent,
    MainComponent,
    NewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
