import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IAuthMethod, IUser, LoginModalComponent, UserService} from "@nx-shops/lib";
import {ModalService} from "ngx-neo-ui";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'shops-lib-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],

})
export abstract class AuthUserComponent {
  public user$: Observable<null | IUser> = this.userService.user$;
  public authMethods$: Observable<null | IAuthMethod[]> = this.userService.authMethods$;

  constructor(
    protected userService: UserService,
    protected modalService: ModalService,
  ) {
  }

  public openLoginModal() {
    this.modalService.open(LoginModalComponent, undefined, {
      title: '<span class="color-brand">Войти</span>',
      authMethods: this.userService.authMethods
    });
  }
}
