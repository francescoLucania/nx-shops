import { CanActivateFn } from '@angular/router';
import {LoginModalComponent, UserService} from "@nx-shops/lib";
import {inject} from "@angular/core";
import {ModalService} from "ngx-neo-ui";

export const authGuard: CanActivateFn = (route, state) => {

  console.log('route', route)
  console.log('state', state)

  const userService: UserService = inject(UserService);
  const modalService: ModalService = inject(ModalService);
  const auth: ModalService = inject(ModalService);

  console.log('route.queryParams[\'ageRating\']', route.queryParams['ageRating'])

  if (route.queryParams['ageRating'] === 'true') {
    if (userService.isAdult) {
      return true;
    } else if (userService.isLoggedIn) {
      alert('Контент 18+');
    } else {
      modalService.open(LoginModalComponent, undefined, {
        title: '<span class="color-brand">Контент 18+</span>, для подтверждения возраста нужно авторизоваться:',
        authMethods: userService.authMethods
      });
    }
  } else {
    return true;
  }
  return false;
};
