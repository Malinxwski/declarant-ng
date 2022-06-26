import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {map, mergeMap, catchError} from 'rxjs/operators';
import {UserService} from "../../services/user.service";
import {loginSuccess, loginError} from "../actions/user.actions";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {
  }
  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth Module] Login User'),
    mergeMap(({login, password}) =>
      this.userService.login({login, password})
        .pipe(
          map(response => (loginSuccess(response.data))),
          catchError(err => of(loginError(err.error)))
        ))
    ),
  )
}

