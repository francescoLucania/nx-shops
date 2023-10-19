import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, ModalModule} from "ngx-neo-ui";
import {Observable} from "rxjs";
import {IAuthMethod, IUser, UserService} from "@nx-shops/lib";

@Component({
  selector: 'book-shop-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, ModalModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public user$: Observable<null | IUser> = this.userService.user$;
  public authMethods$: Observable<null | IAuthMethod[]> = this.userService.authMethods$;

  constructor(private userService: UserService) {
  }
}
