import { Route } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {UserComponent} from "./views/user/user.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];
