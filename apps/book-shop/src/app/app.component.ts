import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ButtonModule, ModalModule} from "ngx-neo-ui";
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  standalone: true,
  imports: [HttpClientModule, RouterModule, ButtonModule, HeaderComponent, ModalModule],
  selector: 'book-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-shop';
}
