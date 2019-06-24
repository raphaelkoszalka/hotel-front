import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BroadcasterService} from "../../services/broadcaster.service";
import {HttpService} from "../../services/http.service";
import {AppConstants} from "../../app.constants";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {

  public checkIns: Observable<Array<object>>;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.checkIns = route['data']['_value']['checkIns'];
    BroadcasterService.get('refreshTable')
    .subscribe(() =>{ this.resolve() }) ;
  }

  private resolve(): void {
    this.http.get(AppConstants.API_BASE + AppConstants.APP_GET)
    .subscribe( (data) => this.checkIns = data);
  }

}

