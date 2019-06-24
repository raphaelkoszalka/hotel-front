import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {IndexResolver} from "./components/index/index.resolver";
import {ModuleWithProviders} from "@angular/core";

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IndexComponent,
    pathMatch: 'full',
    resolve: { 'checkIns': IndexResolver }
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);