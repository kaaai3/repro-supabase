import { Routes } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes')
        .then(m => m.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: ''
  },
];
