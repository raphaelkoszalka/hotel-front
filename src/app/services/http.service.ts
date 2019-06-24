import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<any> {
    return this.http.request('GET', endpoint);
  }

  public post(endpoint: string, data: object): Observable<any>  {
    console.log(JSON.stringify(data));
    debugger;
    return this.http.request('POST', endpoint, data);
  }

}
