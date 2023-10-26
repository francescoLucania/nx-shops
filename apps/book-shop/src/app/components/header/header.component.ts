import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, ModalModule, ModalService} from "ngx-neo-ui";
import {Observable} from "rxjs";
import {IAuthMethod, IUser, LoginModalComponent, UserService} from "@nx-shops/lib";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'book-shop-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, ModalModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  public user$: Observable<null | IUser> = this.userService.user$;
  public authMethods$: Observable<null | IAuthMethod[]> = this.userService.authMethods$;

  constructor(
    private modalService: ModalService,
    private userService: UserService
  ) {
  }

  public openLoginModal() {
    this.modalService.open(LoginModalComponent, undefined, {
      title: '<span class="color-brand">Войти</span>',
      authMethods: this.userService.authMethods
    });
  }
}
