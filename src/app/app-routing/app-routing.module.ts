import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {MainPageComponent} from "../modules/main/main-page/main-page.component";
import {NewsPageComponent} from "../modules/news/news-page/news-page.component";
import {LoginPageComponent} from "../modules/auth/login-page/login-page.component";


const routes: Routes  = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"news",
    component:NewsPageComponent
  },
  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"**",
    redirectTo:""
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
