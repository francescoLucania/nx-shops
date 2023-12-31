import { CanActivateFn } from '@angular/router';
import {LoginModalComponent, UserService} from "@nx-shops/lib";
import {inject} from "@angular/core";
import {ModalService} from "ngx-neo-ui";
import {InfoModalComponent} from "../../../../../lib/src/lib/components/info-modal/info-modal.component";

export const ageRatingGuard: CanActivateFn = (route, state) => {

  const userService: UserService = inject(UserService);
  const modalService: ModalService = inject(ModalService);
  if (Number(route.queryParams['ageRestriction'])) {
    const userAge = userService.userAge ? Number(userService.userAge) : undefined;
    if (userAge && userAge >= route.queryParams['ageRestriction']) {
      return true;
    } else if (userService.isLoggedIn) {
      modalService.open(InfoModalComponent, undefined, {
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
