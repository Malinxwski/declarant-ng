import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "../../store/reducers/user.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "../../store/effects/user.effects";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
})
export class AuthModule {
}
