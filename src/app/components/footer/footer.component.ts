import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public name: string;
  public document: string;
  public phone: string;
  public enterDate: string;
  public leaveDate: string;
  public vehicle: boolean;

  constructor() { }

  ngOnInit() {
  }

}
