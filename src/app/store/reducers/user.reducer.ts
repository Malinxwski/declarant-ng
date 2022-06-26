import {createReducer, on, State} from "@ngrx/store";

import {loginError, loginSuccess} from "../actions/user.actions";
import {UserDto} from "../models/user.model";

interface UserState {
  user: UserDto
  token: string
}

export const initialState = {
  user: {},
  token: ""
}

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {user, token}) => {
    console.log('user>>', user)
    return {
      ...state,
      user,
      token
    }
  }),
  on(loginError, (state, {message}) => {
    console.log(message)
    return state
  })
)
