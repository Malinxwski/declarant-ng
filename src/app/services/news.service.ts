import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

interface NewsParams{
  page:number,
  perPage:number
}

@Injectable({
  providedIn:"any"
})


export class NewsService {

  constructor(private httpClient: HttpClient) {

  }

  public get(url: string): Observable<any>{
    return this.httpClient.get(url);
  }

  public getByFilter(url: string, body:NewsParams): Observable<any>{
    return this.httpClient.post(url, body);
  }

}
