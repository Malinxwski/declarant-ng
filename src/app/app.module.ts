import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
//components
import {AppComponent} from './app.component';
// import {HeaderComponent} from "./shared/header/header.component";
//services
import {NewsService} from "./services/news.service";
//  material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// modules
import {AuthModule} from "./modules/auth/auth.module";
import {MainModule} from "./modules/main/main.module";
import {NewsModule} from "./modules/news/news.module";


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    NewsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
