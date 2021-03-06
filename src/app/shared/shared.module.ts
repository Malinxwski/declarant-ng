import {CommonModule, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
//components
import {HeaderComponent} from "./header/header.component";
import {MaterialModule} from "./material.module";


const importsAndExports = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
const declarationsAndExports = [
  HeaderComponent
]

@NgModule({
  imports: [
    ...importsAndExports
  ],
  declarations: [
    ...declarationsAndExports
  ],
  exports: [
    ...importsAndExports,
    ...declarationsAndExports
  ]
})

export class SharedModule {
}
