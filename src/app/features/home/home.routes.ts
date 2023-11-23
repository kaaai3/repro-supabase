import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DetailsComponent } from "./details/details.component";

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
];
