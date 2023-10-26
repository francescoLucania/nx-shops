import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthUserComponent} from "../../../../../../lib/src/lib/components/abstract/auth-user/auth-user.component";
import {ButtonModule} from "ngx-neo-ui";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'bulletin-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends AuthUserComponent{}
