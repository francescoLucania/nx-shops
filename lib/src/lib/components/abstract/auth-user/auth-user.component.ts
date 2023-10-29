import {Component, Inject, OnInit, Self} from '@angular/core';
import {distinctUntilChanged, Observable, takeUntil, tap} from "rxjs";
import {DestroyService, IAuthMethod, IUser, LoginModalComponent, UserService} from "@nx-shops/lib";
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
  public user$: Observable<null | IUser> = this.userService.user$.pipe(
    distinctUntilChanged(),
    tap((user) => {
      if (!user) {
        this.userService.getAuthMethods();
      }
    })
  );
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
