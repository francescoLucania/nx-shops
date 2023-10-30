import { CanActivateFn } from '@angular/router';
import {LoginModalComponent, UserService} from "@nx-shops/lib";
import {inject} from "@angular/core";
import {ModalService} from "ngx-neo-ui";

export const authGuard: CanActivateFn = (route, state) => {

  const userService: UserService = inject(UserService);
  const modalService: ModalService = inject(ModalService);

  if (userService.isLoggedIn) {
    return true;
  } else {
    modalService.open(LoginModalComponent, undefined, {
      title: 'Для продолжения нужно авторизоваться',
      authMethods: userService.authMethods
    });
  }
  return false;
};
