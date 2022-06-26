import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/user.actions";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide: boolean = true;
  login: string = "";
  password: string = "";


  constructor(private store:Store) {

  }

  ngOnInit(): void {

  }

  submit() {
    this.store.dispatch(login({
      login: this.login,
      password: this.password
    }))

  }

}
