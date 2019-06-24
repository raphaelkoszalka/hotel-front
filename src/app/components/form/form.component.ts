import {Component, EventEmitter, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {AppConstants} from "../../app.constants";
import {FormModel} from "./form.model";
import {BroadcasterService} from "../../services/broadcaster.service";

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
    .subscribe(
        (res) => {
          alert('Check-In com sucesso.');
          this.checkIn = new FormModel();
          BroadcasterService.get('refreshTable').emit('refreshTable');
        },
        (err) => console.error(err)
    );
  }

}
