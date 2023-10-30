import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, ModalModule, ModalService} from "ngx-neo-ui";
import {Observable} from "rxjs";
import {IAuthMethod, IUser, LoginModalComponent, UserService} from "@nx-shops/lib";
import {RouterModule} from "@angular/router";
import {AuthUserComponent} from "../../../../../../lib/src/lib/components/abstract/auth-user/auth-user.component";

@Component({
  selector: 'book-shop-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, ModalModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent extends AuthUserComponent {
  constructor(
    userService: UserService,
    modalService: ModalService,
  ) {
    super(userService, modalService);
  }
}
