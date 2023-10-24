import { Route } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {authGuard} from "./guards/auth.guard";
import {ageRatingGuard} from "./guards/age-rating.guard";
import {UserComponent} from "./views/user/user.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "books/:id",
    canActivate: [ageRatingGuard],
    component: HomeComponent
  },
  {
    path: "user",
    // canActivate: [authGuard],
    component: UserComponent
  },
];
