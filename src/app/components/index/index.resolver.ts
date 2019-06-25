import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs';
import {Observable, Observer} from "rxjs";
import {AppConstants} from "../../app.constants";
import {HttpService} from "../../services/http.service";

@Injectable()
export class IndexResolver implements Resolve<any> {

  constructor(private http: HttpService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    return new Observable((observer: Observer<any>) => {
      this.http.get(AppConstants.API_BASE + AppConstants.APP_GET)
      .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
      );
    });
  }

}
