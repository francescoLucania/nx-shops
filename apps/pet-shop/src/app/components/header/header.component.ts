import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AuthUserComponent} from "../../../../../../lib/src/lib/components/abstract/auth-user/auth-user.component";
import {UserService} from "@nx-shops/lib";
import {ButtonModule, ModalService} from "ngx-neo-ui";

@Component({
  selector: 'angular-monorepo-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
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
