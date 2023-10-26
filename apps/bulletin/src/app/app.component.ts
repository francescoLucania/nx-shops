import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-neo-ui";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, HttpClientModule, ModalModule, FooterComponent],
  selector: 'pet-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pet-shop';
}
