import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {AppConstants} from "../../app.constants";
import {FormModel} from "./form.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  private checkIn: FormModel = new FormModel();

  constructor(private http: HttpService) { }

  public postCheckIn(checkIn): void {
    this.http.post(AppConstants.API_BASE  + AppConstants.APP_POST, checkIn)
    .subscribe( (res) => console.log(res), (err) => console.error(err));
  }

}
