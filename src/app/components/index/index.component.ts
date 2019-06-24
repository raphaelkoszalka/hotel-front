import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {

  public checkIns: Observable<Array<object>>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.checkIns = route['data']['_value']['checkIns'];
  }

}

