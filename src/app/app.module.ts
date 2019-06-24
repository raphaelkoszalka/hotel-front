import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormComponent } from './components/form/form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./services/http.service";
import {IndexResolver} from "./components/index/index.resolver";
import {IndexComponent} from "./components/index/index.component";
import {ROUTING} from "./app.route";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatatableComponent,
    FormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ROUTING
  ],
  providers: [
    HttpService,
    IndexResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
