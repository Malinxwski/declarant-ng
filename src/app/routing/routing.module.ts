import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {NewsComponent} from "../pages/news/news.component";
import {MainComponent} from "../pages/main/main.component";
import {NotFoundComponent} from "../pages/not-found/not-found.component";


const routes: Routes  = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"news",
    component:NewsComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
