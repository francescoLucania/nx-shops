import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-neo-ui";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, HttpClientModule, ModalModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pet-shop';
}
