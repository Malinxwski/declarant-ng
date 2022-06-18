import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn:"any"
})
export class NewsService {

  constructor(private httpClient: HttpClient) {

  }

  public get(url: string): Observable<any>{
    return this.httpClient.get(url);
  }

}
