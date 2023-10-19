import {Component, Input} from '@angular/core';
import {IAuthMethod} from "@nx-shops/lib";
import {ButtonModule} from "ngx-neo-ui";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule],
  selector: 'shops-lib-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  @Input() public title: string;
  @Input() public authMethods: null | IAuthMethod[];
}
