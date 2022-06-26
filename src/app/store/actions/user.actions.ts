import {createAction, props} from "@ngrx/store";

import {
  Credentials, LoginResponse, LoginError
} from '../models/user.model'
import {HttpErrorResponse} from "@angular/common/http";


export const login = createAction(
  '[Auth Module] Login User',
  props<Credentials>()
)
export const loginSuccess = createAction(
  '[Auth Module] Login Success',
  props<LoginResponse>()
)
export const loginError = createAction(
  '[Auth Module] Login Error',
  props<any>()
)
