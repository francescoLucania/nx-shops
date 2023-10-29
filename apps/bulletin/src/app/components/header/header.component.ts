import {Component, Inject, Self} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthUserComponent} from "../../../../../../lib/src/lib/components/abstract/auth-user/auth-user.component";
import {ButtonModule, ModalService} from "ngx-neo-ui";
import {RouterModule} from "@angular/router";
import {DestroyService, UserService} from "@nx-shops/lib";

@Component({
  selector: 'bulletin-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService]
})
export class HeaderComponent extends AuthUserComponent{
  constructor(
    userService: UserService,
    modalService: ModalService,
  ) {
    super(userService, modalService);
  }
}
