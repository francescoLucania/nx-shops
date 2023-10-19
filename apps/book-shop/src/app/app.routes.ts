import { Route } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {authGuard} from "./guards/auth.guard";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "books/:id",
    canActivate: [authGuard],
    component: HomeComponent
  },
];
