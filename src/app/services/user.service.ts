import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
interface Credentials{
  login:string,
  password:string
}
@Injectable({
    providedIn: 'root'
  }
)
export class UserService {
  constructor(private http: HttpClient) {
  }

  login(payload:Credentials):Observable<any> {
      return this.http.post('https://declarant.by/rest/user/login', payload)
  }
}
