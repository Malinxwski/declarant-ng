import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,

} from "@angular/material/form-field";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    MatFormFieldModule,MatSliderModule
  ],
  exports: [
    MatFormFieldModule,MatSliderModule
  ]
})
export class MaterialModule {}
