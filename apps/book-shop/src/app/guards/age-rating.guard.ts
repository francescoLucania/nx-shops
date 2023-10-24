import { CanActivateFn } from '@angular/router';
import {LoginModalComponent, UserService} from "@nx-shops/lib";
import {inject} from "@angular/core";
import {BaseModalComponent, ModalService} from "ngx-neo-ui";

export const ageRatingGuard: CanActivateFn = (route, state) => {

  console.log('route', route)
  console.log('state', state)

  const userService: UserService = inject(UserService);
  const modalService: ModalService = inject(ModalService);

  console.log('route.queryParams[\'ageRating\']', route.queryParams['ageRating'])

  if (Number(route.queryParams['ageRestriction'])) {
    const userAge = userService.userAge ? Number(userService.userAge) : undefined;
    if (userAge && userAge >= route.queryParams['ageRestriction']) {
      return true;
    } else if (userService.isLoggedIn) {
      modalService.open(BaseModalComponent, undefined, {
        title: 'Контент имеет возрастное ограничение',
      });
    } else {
      modalService.open(LoginModalComponent, undefined, {
        title: '<span class="color-brand">Контент имеет возрастное ограничение</span>, для подтверждения возраста нужно авторизоваться:',
        authMethods: userService.authMethods
      });
    }
  } else {
    return true;
  }
  return false;
};
