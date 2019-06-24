import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {AppConstants} from "../../app.constants";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  private name: string;
  private document: string;
  private phone: string;
  private enterDate: string;
  private leaveDate: string;
  private vehicle: boolean;


  constructor(private http: HttpService) { }

  public postCheckIn(name: string, document: string, phone: string,
                     enterDate: string, leaveDate: string, vehicle: boolean): void {

    const checkInData = {
      name: name,
      document: document,
      phone: phone,
      enterDate: enterDate,
      leaveDate: leaveDate,
      vehicle: vehicle,
      bill: 0
    };

    this.http.post(AppConstants.API_BASE  + AppConstants.APP_POST, checkInData).subscribe( (res) => console.log(res));
  }

}
