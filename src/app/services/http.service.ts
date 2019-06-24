import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";
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
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' })};
    return this.http.post(endpoint, JSON.stringify(data), httpOptions);
  }

}
